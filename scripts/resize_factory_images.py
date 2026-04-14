import os
from pathlib import Path
from PIL import Image

BASE = Path("public/images/factory")
MAX_WIDTH = 1200
QUALITY = 85

for folder in sorted(BASE.iterdir()):
    if not folder.is_dir():
        continue
    for img_path in folder.iterdir():
        if not img_path.is_file():
            continue
        if img_path.name == ".DS_Store":
            continue
        suffix = img_path.suffix.lower()
        if suffix not in (".png", ".jpg", ".jpeg", ".webp"):
            continue

        out_name = Path(img_path.stem).stem + ".jpg"
        out_path = folder / out_name

        with Image.open(img_path) as im:
            # Convert to RGB
            if im.mode in ("RGBA", "P"):
                im = im.convert("RGB")
            # Resize if wider than MAX_WIDTH
            w, h = im.size
            if w > MAX_WIDTH:
                ratio = MAX_WIDTH / w
                new_size = (MAX_WIDTH, int(h * ratio))
                im = im.resize(new_size, Image.LANCZOS)
            im.save(out_path, "JPEG", quality=QUALITY, optimize=True)

        # If original was a different file, remove original only if it's a PNG that we just converted
        # But to be safe, let's keep originals unless they are large and the new JPG is smaller
        if suffix == ".png" and img_path != out_path:
            print(f"Replaced {img_path.name} -> {out_name} in {folder.name}")
        elif suffix != ".jpg":
            print(f"Converted {img_path.name} -> {out_name} in {folder.name}")
        else:
            if img_path.name != out_name:
                img_path.unlink()
                print(f"Renamed {img_path.name} -> {out_name} in {folder.name}")

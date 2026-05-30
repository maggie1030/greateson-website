import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

// English fonts
const inter = Inter({
  variable: "--font-en-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-en-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Chinese fonts
const notoSansSC = Noto_Sans_SC({
  variable: "--font-zh-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://greatesonsteel.com"),
  title: {
    default: "Greateson",
    template: "%s | Greateson",
  },
  description: "Premium stainless steel decorative solutions for architecture and commercial projects.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${cormorant.variable} ${notoSansSC.variable} h-full`}>
      <body className="min-h-full bg-[#0f1714] text-white antialiased">{children}</body>
    </html>
  );
}

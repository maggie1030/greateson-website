import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { company } from "@/lib/site-data";

export function Footer({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const brand = isEn ? company.name : company.zhName;

  return (
    <footer className="border-t border-[#2a3a33] bg-[#111a17]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-[#e6cf9f]">{brand}</h3>
          <p className="mt-3 text-sm text-zinc-300">
            {isEn
              ? "Premium stainless steel decorative solutions for architecture and commercial interiors."
              : "面向建筑与商业空间的高端不锈钢装饰解决方案。"}
          </p>
        </div>
        <div className="text-sm text-zinc-300">
          <p>{isEn ? "Phone" : "电话"}: {company.phone}</p>
          <p className="mt-2">{isEn ? "WhatsApp" : "即时通讯"}: {company.whatsapp}</p>
          <p className="mt-2">{isEn ? "Email" : "邮箱"}: {company.email}</p>
          <p className="mt-2">{isEn ? "Headquarters" : "总部"}: {company.headquarters[locale]}</p>
        </div>
        <div className="text-sm text-zinc-300">
          <p>{isEn ? "Factory Area" : "工厂面积"}: {company.factoryArea}</p>
          <p className="mt-2">{isEn ? "Employees" : "员工"}: {company.employees}</p>
          <p className="mt-2">{isEn ? "Markets" : "主要市场"}: {company.markets[locale]}</p>
        </div>
      </div>
    </footer>
  );
}

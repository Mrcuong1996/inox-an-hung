import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { CATEGORIES } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
              <span className="text-base font-bold">TP</span>
            </div>
            <div>
              <div className="font-display font-bold">INOX AN HƯNG</div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">Since 2010</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Chuyên sản xuất, gia công inox 304/201 theo yêu cầu. Hơn 15 năm kinh nghiệm phục vụ
            nhà hàng, khách sạn, nhà máy và công trình dân dụng.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Điều hướng</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-accent transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Sản phẩm</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/san-pham" search={{ cat: c.slug }} className="hover:text-accent transition-colors">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Liên hệ</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-accent" /> <a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-accent" /> <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} INOX AN HƯNG. Mọi quyền được bảo lưu.</p>
          <p>Thiết kế chuẩn SEO · Responsive · Tối ưu tốc độ</p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContacts } from "@/components/FloatingContacts";
import { SERVICES } from "@/lib/catalog";

export const Route = createFileRoute("/dich-vu/")({
  head: () => ({
    meta: [
      { title: "Dịch vụ gia công inox — INOX AN HƯNG" },
      { name: "description", content: "Cắt laser fiber, chấn gấp CNC, hàn TIG/MIG, đánh bóng inox chuyên nghiệp. Gia công inox theo bản vẽ chính xác ±0.1mm." },
      { property: "og:title", content: "Dịch vụ gia công inox — INOX AN HƯNG" },
      { property: "og:url", content: "/dich-vu" },
    ],
    links: [{ rel: "canonical", href: "/dich-vu" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-hero-gradient py-20 text-primary-foreground md:py-28">
          <div className="container-page">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Dịch vụ</div>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Dịch vụ gia công inox chuyên sâu</h1>
            <p className="mt-4 max-w-2xl text-white/85">Trang bị hệ thống máy CNC hiện đại, đội ngũ thợ tay nghề cao — đảm nhận trọn gói từ thiết kế đến sản xuất.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-page grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/dich-vu/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:shadow-elegant">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={s.image} alt={s.name} loading="lazy" width={1200} height={675} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">Xem chi tiết <ArrowRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

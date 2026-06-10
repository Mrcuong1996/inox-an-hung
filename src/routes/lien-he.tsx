import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { FloatingContacts } from "@/components/ui/FloatingContacts";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { SITE } from "@/lib/api/site";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — INOX AN HƯNG" },
      { name: "description", content: "Liên hệ INOX AN HƯNG: hotline, Zalo, email, địa chỉ xưởng tại Thanh Hóa. Yêu cầu báo giá nhanh trong 30 phút." },
      { property: "og:title", content: "Liên hệ — INOX AN HƯNG" },
      { property: "og:url", content: "/lien-he" },
    ],
    links: [{ rel: "canonical", href: "/lien-he" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Phone, title: "Hotline", value: SITE.phone, href: SITE.phoneHref },
    { icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, title: "Địa chỉ", value: SITE.address },
    { icon: Clock, title: "Giờ làm việc", value: "T2 – T7: 7h30 – 17h30" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-hero-gradient py-20 text-primary-foreground md:py-24">
          <div className="container-page">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Liên hệ</div>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Sẵn sàng tư vấn — Báo giá trong 30 phút</h1>
            <p className="mt-4 max-w-2xl text-white/85">Đội ngũ kỹ thuật INOX AN HƯNG luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu cho dự án của bạn.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-page grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-4">
              {items.map((it) => (
                <div key={it.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <it.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.title}</div>
                    {it.href ? (
                      <a href={it.href} className="mt-0.5 block font-semibold text-primary hover:text-accent">{it.value}</a>
                    ) : (
                      <div className="mt-0.5 font-semibold text-primary">{it.value}</div>
                    )}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0068ff] px-4 py-3 text-sm font-semibold text-white">Chat Zalo</a>
                <a href={SITE.messenger} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0084ff] px-4 py-3 text-sm font-semibold text-white"><MessageCircle size={16} /> Messenger</a>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-2xl bg-card p-6 shadow-elegant md:p-8">
              <SectionTitle eyebrow="Gửi yêu cầu" title="Form báo giá nhanh" />
              <div className="mt-6"><QuoteForm /></div>
            </div>
          </div>

          <div className="container-page mt-12">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card-soft">
              <iframe
                title="Bản đồ INOX AN HƯNG"
                src="https://www.google.com/maps?q=19.8216857,105.7604043&output=embed"
                className="h-[400px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

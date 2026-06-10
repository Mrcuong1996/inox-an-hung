import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { FloatingContacts } from "@/components/ui/FloatingContacts";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { NEWS } from "@/lib/api/catalog";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức & kiến thức inox — INOX AN HƯNG" },
      { name: "description", content: "Cập nhật kiến thức về inox 304/201, kinh nghiệm lựa chọn, xu hướng ngành cơ khí và gia công inox." },
      { property: "og:title", content: "Tin tức inox" },
      { property: "og:url", content: "/tin-tuc" },
    ],
    links: [{ rel: "canonical", href: "/tin-tuc" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-16 md:py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Tin tức" title="Kiến thức & xu hướng ngành inox" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NEWS.map((n) => (
              <article key={n.slug} className="overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[16/9] bg-steel-gradient" />
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={12} /> {new Date(n.date).toLocaleDateString("vi-VN")}
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold text-primary line-clamp-2">{n.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

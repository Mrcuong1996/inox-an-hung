import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContacts } from "@/components/FloatingContacts";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/catalog";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án đã thực hiện — INOX AN HƯNG" },
      { name: "description", content: "Thư viện công trình inox đã thực hiện: bếp công nghiệp khách sạn 5 sao, lan can inox tòa nhà, hệ bồn chứa nhà máy thực phẩm." },
      { property: "og:title", content: "Dự án tiêu biểu — INOX AN HƯNG" },
      { property: "og:url", content: "/du-an" },
    ],
    links: [{ rel: "canonical", href: "/du-an" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="py-16 md:py-20">
          <div className="container-page">
            <SectionTitle eyebrow="Dự án" title="Công trình tiêu biểu" desc="Hàng nghìn dự án đã hoàn thiện trên khắp cả nước." center />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <article key={p.slug} className={`group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:shadow-elegant ${i === 0 ? "md:col-span-2" : ""}`}>
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" width={1200} height={900} className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`} />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{p.client}</div>
                    <h2 className="mt-2 font-display text-xl font-bold text-primary md:text-2xl">{p.name}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

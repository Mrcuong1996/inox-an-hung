import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContacts } from "@/components/FloatingContacts";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICES } from "@/lib/catalog";

export const Route = createFileRoute("/dich-vu/$slug")({
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — INOX AN HƯNG` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.short },
          { property: "og:image", content: loaderData.image },
          { property: "og:url", content: `/dich-vu/${loaderData.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/dich-vu/${loaderData.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background"><SiteHeader /><div className="container-page py-32 text-center"><h1 className="font-display text-3xl">Không tìm thấy dịch vụ</h1><Link to="/dich-vu" className="mt-6 inline-block text-accent">← Quay lại</Link></div></div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
          <img src={s.image} alt={s.name} className="absolute inset-0 h-full w-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-hero-gradient opacity-80" />
          <div className="container-page relative flex h-full flex-col justify-end pb-10">
            <Link to="/dich-vu" className="inline-flex w-fit items-center gap-1.5 text-sm text-white/80 hover:text-accent"><ArrowLeft size={14} /> Tất cả dịch vụ</Link>
            <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">{s.name}</h1>
            <p className="mt-2 max-w-2xl text-white/85">{s.short}</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-page grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-primary">Quy trình thực hiện</h2>
                <ol className="mt-5 space-y-3">
                  {s.process.map((step: string, i: number) => (
                    <li key={step} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">{i + 1}</div>
                      <div className="pt-1.5 text-sm font-medium text-foreground">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary">Ưu điểm vượt trội</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.benefits.map((b: string) => (
                    <li key={b} className="flex gap-2 rounded-xl bg-secondary/60 p-4 text-sm">
                      <CheckCircle2 size={18} className="shrink-0 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 self-start rounded-2xl bg-card p-6 shadow-elegant">
              <h3 className="font-display text-lg font-semibold text-primary">Gửi yêu cầu dịch vụ</h3>
              <p className="mt-1 text-sm text-muted-foreground">Phản hồi trong 30 phút</p>
              <div className="mt-5"><QuoteForm compact /></div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

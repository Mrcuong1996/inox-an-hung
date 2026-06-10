import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { FloatingContacts } from "@/components/ui/FloatingContacts";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { PRODUCTS, CATEGORIES } from "@/lib/api/catalog";
import { SITE } from "@/lib/api/site";

export const Route = createFileRoute("/san-pham/$slug")({
  loader: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — INOX AN HƯNG` },
          { name: "description", content: loaderData.desc.slice(0, 155) },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.desc.slice(0, 155) },
          { property: "og:image", content: loaderData.image },
          { property: "og:url", content: `/san-pham/${loaderData.slug}` },
          { property: "og:type", content: "product" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/san-pham/${loaderData.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background"><SiteHeader /><div className="container-page py-32 text-center"><h1 className="font-display text-3xl">Không tìm thấy sản phẩm</h1><Link to="/san-pham" className="mt-6 inline-block text-accent">← Quay lại danh sách</Link></div></div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const p = Route.useLoaderData();
  const cat = CATEGORIES.find((c) => c.slug === p.category);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-12">
        <div className="container-page">
          <Link to="/san-pham" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft size={14} /> Tất cả sản phẩm
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-steel-gradient shadow-card-soft">
              <img src={p.image} alt={p.name} width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{cat?.name}</div>
              <h1 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">{p.name}</h1>
              <p className="mt-4 text-foreground/85 leading-relaxed">{p.desc}</p>

              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <div className="font-display text-sm font-semibold text-primary mb-3">Thông số kỹ thuật</div>
                <dl className="grid gap-3 sm:grid-cols-2">
                  {p.specs.map((s: { label: string; value: string }) => (
                    <div key={s.label}>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                      <dd className="mt-0.5 text-sm font-medium text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="mt-6 grid gap-2 text-sm text-foreground/85">
                {["Vật liệu inox chính hãng có CO/CQ", "Đường hàn TIG kín, không ba via", "Bảo hành 24 tháng, hỗ trợ kỹ thuật trọn đời"].map((t) => (
                  <li key={t} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-accent shrink-0" /> {t}</li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-colors">
                  Yêu cầu báo giá
                </a>
                <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-accent transition-colors">
                  <MessageCircle size={16} /> Chat Zalo
                </a>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-accent transition-colors">
                  <Phone size={16} /> {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          <section id="quote" className="mt-20 rounded-2xl bg-secondary/40 p-6 md:p-10">
            <div className="max-w-xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-primary text-center">Yêu cầu báo giá sản phẩm này</h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">Đội ngũ kinh doanh sẽ liên hệ trong 30 phút.</p>
              <div className="mt-6"><QuoteForm compact /></div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

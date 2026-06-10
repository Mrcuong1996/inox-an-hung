import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContacts } from "@/components/FloatingContacts";
import { SectionTitle } from "@/components/SectionTitle";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";

const search = z.object({ cat: z.string().optional(), q: z.string().optional() });

export const Route = createFileRoute("/san-pham/")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Sản phẩm inox — INOX AN HƯNG" },
      { name: "description", content: "Bàn inox, kệ inox, tủ inox, bồn chứa, thiết bị bếp công nghiệp và gia công chi tiết inox theo bản vẽ. Inox 304/201 chính hãng, bảo hành 24 tháng." },
      { property: "og:title", content: "Sản phẩm inox — INOX AN HƯNG" },
      { property: "og:description", content: "Đầy đủ danh mục sản phẩm inox cho nhà hàng, bếp công nghiệp và công trình." },
      { property: "og:url", content: "/san-pham" },
    ],
    links: [{ rel: "canonical", href: "/san-pham" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { cat, q } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [active, setActive] = useState<string | undefined>(cat);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) =>
      (!active || p.category === active) &&
      (!query || p.name.toLowerCase().includes(query.toLowerCase()))
    );
  }, [active, query]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-secondary/40 py-14">
          <div className="container-page">
            <SectionTitle eyebrow="Sản phẩm" title="Danh mục sản phẩm inox" desc="Tìm kiếm theo tên hoặc lọc theo danh mục để xem các sản phẩm phù hợp với nhu cầu." />
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm sản phẩm…" className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={() => setActive(undefined)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${!active ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-accent"}`}>Tất cả</button>
              {CATEGORIES.map((c) => (
                <button key={c.slug} onClick={() => setActive(c.slug)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${active === c.slug ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-accent"}`}>{c.name}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container-page">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">Không tìm thấy sản phẩm phù hợp.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <Link key={p.slug} to="/san-pham/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                    <div className="aspect-[4/3] overflow-hidden bg-steel-gradient">
                      <img src={p.image} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {CATEGORIES.find((c) => c.slug === p.category)?.name}
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors">{p.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}

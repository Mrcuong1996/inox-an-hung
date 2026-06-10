import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { S as SectionTitle } from "./SectionTitle-BSGj9paT.js";
import { R as Route, a as PRODUCTS, C as CATEGORIES } from "./router-DRcL3C_y.js";
import "@tanstack/react-query";
import "zod";
function ProductsPage() {
  const {
    cat,
    q
  } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [active, setActive] = useState(cat);
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => (!active || p.category === active) && (!query || p.name.toLowerCase().includes(query.toLowerCase())));
  }, [active, query]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-14", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Sản phẩm", title: "Danh mục sản phẩm inox", desc: "Tìm kiếm theo tên hoặc lọc theo danh mục để xem các sản phẩm phù hợp với nhu cầu." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", size: 16 }),
          /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Tìm sản phẩm…", className: "w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setActive(void 0), className: `rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${!active ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-accent"}`, children: "Tất cả" }),
          CATEGORIES.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(c.slug), className: `rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${active === c.slug ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-accent"}`, children: c.name }, c.slug))
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-14", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: filtered.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground py-20", children: "Không tìm thấy sản phẩm phù hợp." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/san-pham/$slug", params: {
        slug: p.slug
      }, className: "group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-steel-gradient", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", width: 800, height: 600, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: CATEGORIES.find((c) => c.slug === p.category)?.name }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1.5 font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.desc })
        ] })
      ] }, p.slug)) }) }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  ProductsPage as component
};

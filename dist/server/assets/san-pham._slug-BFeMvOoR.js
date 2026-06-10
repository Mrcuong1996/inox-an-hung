import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { S as SiteHeader, a as SITE } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { Q as QuoteForm } from "./QuoteForm-Cze_X72v.js";
import { b as Route, C as CATEGORIES } from "./router-DRcL3C_y.js";
import "react";
import "@tanstack/react-query";
import "zod";
function ProductDetail() {
  const p = Route.useLoaderData();
  const cat = CATEGORIES.find((c) => c.slug === p.category);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/san-pham", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 14 }),
        " Tất cả sản phẩm"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-10 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl bg-steel-gradient shadow-card-soft", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, width: 1200, height: 900, className: "aspect-[4/3] w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent", children: cat?.name }),
          /* @__PURE__ */ jsx("h1", { className: "mt-2 font-display text-3xl font-bold text-primary md:text-4xl", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/85 leading-relaxed", children: p.desc }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-sm font-semibold text-primary mb-3", children: "Thông số kỹ thuật" }),
            /* @__PURE__ */ jsx("dl", { className: "grid gap-3 sm:grid-cols-2", children: p.specs.map((s) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: s.label }),
              /* @__PURE__ */ jsx("dd", { className: "mt-0.5 text-sm font-medium text-foreground", children: s.value })
            ] }, s.label)) })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-2 text-sm text-foreground/85", children: ["Vật liệu inox chính hãng có CO/CQ", "Đường hàn TIG kín, không ba via", "Bảo hành 24 tháng, hỗ trợ kỹ thuật trọn đời"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "mt-0.5 text-accent shrink-0" }),
            " ",
            t
          ] }, t)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsx("a", { href: "#quote", className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-colors", children: "Yêu cầu báo giá" }),
            /* @__PURE__ */ jsxs("a", { href: SITE.zalo, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-accent transition-colors", children: [
              /* @__PURE__ */ jsx(MessageCircle, { size: 16 }),
              " Chat Zalo"
            ] }),
            /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-accent transition-colors", children: [
              /* @__PURE__ */ jsx(Phone, { size: 16 }),
              " ",
              SITE.phone
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "quote", className: "mt-20 rounded-2xl bg-secondary/40 p-6 md:p-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-primary text-center", children: "Yêu cầu báo giá sản phẩm này" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-muted-foreground", children: "Đội ngũ kinh doanh sẽ liên hệ trong 30 phút." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(QuoteForm, { compact: true }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  ProductDetail as component
};

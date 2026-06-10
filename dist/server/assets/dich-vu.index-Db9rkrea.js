import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { S as SERVICES } from "./router-DRcL3C_y.js";
import "react";
import "@tanstack/react-query";
import "zod";
function ServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "bg-hero-gradient py-20 text-primary-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: "Dịch vụ" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Dịch vụ gia công inox chuyên sâu" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-white/85", children: "Trang bị hệ thống máy CNC hiện đại, đội ngũ thợ tay nghề cao — đảm nhận trọn gói từ thiết kế đến sản xuất." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container-page grid gap-6 md:grid-cols-2", children: SERVICES.map((s) => /* @__PURE__ */ jsxs(Link, { to: "/dich-vu/$slug", params: {
        slug: s.slug
      }, className: "group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:shadow-elegant", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: s.image, alt: s.name, loading: "lazy", width: 1200, height: 675, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-primary group-hover:text-accent transition-colors", children: s.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.short }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent", children: [
            "Xem chi tiết ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] }, s.slug)) }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  ServicesPage as component
};

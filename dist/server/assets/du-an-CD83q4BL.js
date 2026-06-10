import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { S as SectionTitle } from "./SectionTitle-BSGj9paT.js";
import { P as PROJECTS } from "./router-DRcL3C_y.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@tanstack/react-query";
import "zod";
function ProjectsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Dự án", title: "Công trình tiêu biểu", desc: "Hàng nghìn dự án đã hoàn thiện trên khắp cả nước.", center: true }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-8 md:grid-cols-2", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxs("article", { className: `group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:shadow-elegant ${i === 0 ? "md:col-span-2" : ""}`, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", width: 1200, height: 900, className: `w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}` }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent", children: p.client }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-xl font-bold text-primary md:text-2xl", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.desc })
        ] })
      ] }, p.slug)) })
    ] }) }) }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  ProjectsPage as component
};

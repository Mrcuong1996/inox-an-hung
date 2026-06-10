import { jsxs, jsx } from "react/jsx-runtime";
import { Calendar } from "lucide-react";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { S as SectionTitle } from "./SectionTitle-BSGj9paT.js";
import { N as NEWS } from "./router-DRcL3C_y.js";
import "@tanstack/react-router";
import "react";
import "@tanstack/react-query";
import "zod";
function NewsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Tin tức", title: "Kiến thức & xu hướng ngành inox", center: true }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: NEWS.map((n) => /* @__PURE__ */ jsxs("article", { className: "overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] bg-steel-gradient" }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Calendar, { size: 12 }),
            " ",
            new Date(n.date).toLocaleDateString("vi-VN")
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-lg font-semibold text-primary line-clamp-2", children: n.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-3", children: n.excerpt })
        ] })
      ] }, n.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  NewsPage as component
};

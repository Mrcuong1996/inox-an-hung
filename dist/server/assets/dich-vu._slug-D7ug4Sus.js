import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { Q as QuoteForm } from "./QuoteForm-Cze_X72v.js";
import { c as Route } from "./router-DRcL3C_y.js";
import "react";
import "@tanstack/react-query";
import "zod";
function ServiceDetail() {
  const s = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { className: "relative h-[40vh] min-h-[280px] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: s.image, alt: s.name, className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" }),
        /* @__PURE__ */ jsxs("div", { className: "container-page relative flex h-full flex-col justify-end pb-10", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/dich-vu", className: "inline-flex w-fit items-center gap-1.5 text-sm text-white/80 hover:text-accent", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 14 }),
            " Tất cả dịch vụ"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-bold text-white md:text-5xl", children: s.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-white/85", children: s.short })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-10 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Quy trình thực hiện" }),
            /* @__PURE__ */ jsx("ol", { className: "mt-5 space-y-3", children: s.process?.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-4 rounded-xl border p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white font-bold text-sm", children: i + 1 }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: step })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Ưu điểm vượt trội" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: s.benefits?.map((b, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 rounded-xl bg-gray-100 p-4 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
              " ",
              b
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "rounded-2xl bg-white p-6 shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Gửi yêu cầu dịch vụ" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Phản hồi trong 30 phút" }),
          /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(QuoteForm, { compact: true }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  ServiceDetail as component
};

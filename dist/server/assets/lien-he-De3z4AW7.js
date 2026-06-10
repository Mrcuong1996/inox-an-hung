import { jsxs, jsx } from "react/jsx-runtime";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { S as SiteHeader, a as SITE } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { S as SectionTitle } from "./SectionTitle-BSGj9paT.js";
import { Q as QuoteForm } from "./QuoteForm-Cze_X72v.js";
import "@tanstack/react-router";
import "react";
import "./router-DRcL3C_y.js";
import "@tanstack/react-query";
import "zod";
function ContactPage() {
  const items = [{
    icon: Phone,
    title: "Hotline",
    value: SITE.phone,
    href: SITE.phoneHref
  }, {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`
  }, {
    icon: MapPin,
    title: "Địa chỉ",
    value: SITE.address
  }, {
    icon: Clock,
    title: "Giờ làm việc",
    value: "T2 – T7: 7h30 – 17h30"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "bg-hero-gradient py-20 text-primary-foreground md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: "Liên hệ" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Sẵn sàng tư vấn — Báo giá trong 30 phút" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-white/85", children: "Đội ngũ kỹ thuật INOX AN HƯNG luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu cho dự án của bạn." })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-10 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
            items.map((it) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border border-border bg-card p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent", children: /* @__PURE__ */ jsx(it.icon, { size: 20 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: it.title }),
                it.href ? /* @__PURE__ */ jsx("a", { href: it.href, className: "mt-0.5 block font-semibold text-primary hover:text-accent", children: it.value }) : /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold text-primary", children: it.value })
              ] })
            ] }, it.title)),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 pt-2", children: [
              /* @__PURE__ */ jsx("a", { href: SITE.zalo, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-md bg-[#0068ff] px-4 py-3 text-sm font-semibold text-white", children: "Chat Zalo" }),
              /* @__PURE__ */ jsxs("a", { href: SITE.messenger, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-md bg-[#0084ff] px-4 py-3 text-sm font-semibold text-white", children: [
                /* @__PURE__ */ jsx(MessageCircle, { size: 16 }),
                " Messenger"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 rounded-2xl bg-card p-6 shadow-elegant md:p-8", children: [
            /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Gửi yêu cầu", title: "Form báo giá nhanh" }),
            /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(QuoteForm, {}) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container-page mt-12", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-card-soft", children: /* @__PURE__ */ jsx("iframe", { title: "Bản đồ INOX AN HƯNG", src: "https://www.google.com/maps?q=19.8216857,105.7604043&output=embed", className: "h-[400px] w-full", loading: "lazy" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  ContactPage as component
};

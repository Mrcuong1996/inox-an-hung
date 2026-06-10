import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { N as NAV, a as SITE } from "./SiteHeader-D3uu_Zp1.js";
import { C as CATEGORIES } from "./router-DRcL3C_y.js";
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-20 bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-accent", children: /* @__PURE__ */ jsx("span", { className: "text-base font-bold", children: "TP" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold", children: "INOX AN HƯNG" }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] opacity-70", children: "Since 2010" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm opacity-80 leading-relaxed", children: "Chuyên sản xuất, gia công inox 304/201 theo yêu cầu. Hơn 15 năm kinh nghiệm phục vụ nhà hàng, khách sạn, nhà máy và công trình dân dụng." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-wider", children: "Điều hướng" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm opacity-80", children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "hover:text-accent transition-colors", children: n.label }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-wider", children: "Sản phẩm" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm opacity-80", children: CATEGORIES.slice(0, 6).map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/san-pham", search: { cat: c.slug }, className: "hover:text-accent transition-colors", children: c.name }) }, c.slug)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-wider", children: "Liên hệ" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm opacity-90", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
            " ",
            SITE.address
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: SITE.phoneHref, className: "hover:text-accent", children: SITE.phone })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${SITE.email}`, className: "hover:text-accent", children: SITE.email })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex flex-col gap-2 py-5 text-xs opacity-70 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " INOX AN HƯNG. Mọi quyền được bảo lưu."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Thiết kế chuẩn SEO · Responsive · Tối ưu tốc độ" })
    ] }) })
  ] });
}
function FloatingContacts() {
  const items = [
    { href: SITE.phoneHref, label: "Gọi điện", icon: /* @__PURE__ */ jsx(Phone, { size: 20 }), color: "bg-accent" },
    { href: SITE.zalo, label: "Chat Zalo", icon: /* @__PURE__ */ jsx("span", { className: "font-bold text-sm", children: "Z" }), color: "bg-[#0068ff]" },
    { href: SITE.messenger, label: "Messenger", icon: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }), color: "bg-[#0084ff]" },
    { href: SITE.whatsapp, label: "WhatsApp", icon: /* @__PURE__ */ jsx("span", { className: "font-bold text-sm", children: "W" }), color: "bg-[#25d366]" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-5 right-4 z-40 flex flex-col gap-2.5", children: items.map((it) => /* @__PURE__ */ jsx(
    "a",
    {
      href: it.href,
      target: it.href.startsWith("http") ? "_blank" : void 0,
      rel: "noopener noreferrer",
      "aria-label": it.label,
      className: `${it.color} text-white flex h-12 w-12 items-center justify-center rounded-full shadow-elegant transition-transform hover:scale-110`,
      children: it.icon
    },
    it.label
  )) });
}
export {
  FloatingContacts as F,
  SiteFooter as S
};

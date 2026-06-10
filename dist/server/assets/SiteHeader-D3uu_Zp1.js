import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, X, Menu } from "lucide-react";
const SITE = {
  phone: "0976.036.631",
  phoneHref: "tel:+84976036631",
  zalo: "https://zalo.me/0976040121",
  messenger: "https://m.me/inoxanhhungth",
  whatsapp: "https://wa.me/84976036631",
  email: "vanlytuongtuluv@gmail.com",
  address: "Lô 10 khu công nghiệp - tây bắc ga - phường đông thọ - thành phố Thanh Hóa - tỉnh Thanh Hóa"
};
const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/gioi-thieu", label: "Giới thiệu" },
  { to: "/san-pham", label: "Sản phẩm" },
  { to: "/dich-vu", label: "Dịch vụ" },
  { to: "/du-an", label: "Dự án" },
  { to: "/tin-tuc", label: "Tin tức" },
  { to: "/lien-he", label: "Liên hệ" }
];
function SiteHeader() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between gap-4 md:h-20", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-hero-gradient shadow-glow", children: /* @__PURE__ */ jsx("span", { className: "text-base font-bold tracking-tight text-primary-foreground", children: "TP" }) }),
        /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-base font-bold text-primary md:text-lg", children: "INOX AN HƯNG" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]", children: "Stainless · Since 2010" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
          activeProps: { className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: SITE.phoneHref,
            className: "hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card-soft transition-all hover:bg-primary-glow",
            children: [
              /* @__PURE__ */ jsx(Phone, { size: 16 }),
              " ",
              SITE.phone
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border",
            "aria-label": "Menu",
            children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxs("nav", { className: "container-page flex flex-col py-3", children: [
      NAV.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary",
          activeProps: { className: "rounded-md px-3 py-3 text-sm font-semibold text-primary bg-secondary" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground", children: [
        /* @__PURE__ */ jsx(Phone, { size: 16 }),
        " Gọi ",
        SITE.phone
      ] })
    ] }) })
  ] });
}
export {
  NAV as N,
  SiteHeader as S,
  SITE as a
};

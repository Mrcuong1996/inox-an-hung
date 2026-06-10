import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Zap, Award, Wrench, Quote, Star, MapPin } from "lucide-react";
import { S as SiteHeader, a as SITE } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { Q as QuoteForm } from "./QuoteForm-Cze_X72v.js";
import { S as SectionTitle } from "./SectionTitle-BSGj9paT.js";
import { a as PRODUCTS, S as SERVICES, P as PROJECTS, T as TESTIMONIALS } from "./router-DRcL3C_y.js";
import "react";
import "@tanstack/react-query";
import "zod";
const heroImg = "/assets/hero-workshop-RqE7VV-T.jpg";
function HomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Highlights, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(ProductsSection, {}),
      /* @__PURE__ */ jsx(ServicesSection, {}),
      /* @__PURE__ */ jsx(ProjectsSection, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(QuoteCta, {}),
      /* @__PURE__ */ jsx(ContactBlock, {})
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Xưởng gia công inox INOX AN HƯNG", className: "absolute inset-0 h-full w-full object-cover", width: 1920, height: 1080 }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero-gradient opacity-90" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
      background: "radial-gradient(ellipse at center, transparent 0%, rgb(0 0 0 / 0.4) 100%)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "container-page relative py-24 md:py-36 lg:py-44", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
        " 15+ năm kinh nghiệm gia công inox"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-4xl font-bold leading-[1.1] text-white text-balance md:text-6xl lg:text-7xl", children: [
        "Gia công inox theo yêu cầu — ",
        /* @__PURE__ */ jsx("span", { className: "text-shimmer", children: "Chính xác · Bền bỉ · Sang trọng" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base text-white/85 md:text-lg leading-relaxed", children: "INOX AN HƯNG chuyên cắt laser, chấn gấp, hàn TIG/MIG và sản xuất thiết bị inox 304/201 cho nhà hàng, khách sạn, nhà máy và công trình dân dụng." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/lien-he", className: "inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-all hover:scale-[1.02]", children: [
          "Yêu cầu báo giá ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15", children: [
          /* @__PURE__ */ jsx(Phone, { size: 16 }),
          " ",
          SITE.phone
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-xl", children: [{
        k: "1.500+",
        v: "Công trình"
      }, {
        k: "15",
        v: "Năm kinh nghiệm"
      }, {
        k: "98%",
        v: "Hài lòng"
      }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold text-white md:text-3xl", children: s.k }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-white/60", children: s.v })
      ] }, s.v)) })
    ] }) })
  ] });
}
function Highlights() {
  const items = [{
    icon: ShieldCheck,
    title: "Inox 304/201 chính hãng",
    desc: "Cam kết vật liệu chuẩn, có chứng chỉ xuất xứ rõ ràng."
  }, {
    icon: Zap,
    title: "Tiến độ nhanh",
    desc: "Báo giá trong 30 phút, sản xuất từ 3–7 ngày tuỳ quy mô."
  }, {
    icon: Award,
    title: "Bảo hành 24 tháng",
    desc: "Bảo hành dài hạn, hỗ trợ kỹ thuật trọn đời sản phẩm."
  }, {
    icon: Wrench,
    title: "Theo bản vẽ riêng",
    desc: "Nhận DWG/DXF/PDF, gia công đúng yêu cầu khách hàng."
  }];
  return /* @__PURE__ */ jsx("section", { className: "relative -mt-12 z-10", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 rounded-2xl bg-card p-4 shadow-elegant md:grid-cols-4 md:p-6", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 rounded-xl p-3 transition-colors hover:bg-secondary/60", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent", children: /* @__PURE__ */ jsx(it.icon, { size: 20 }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-sm font-semibold text-primary", children: it.title }),
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-xs text-muted-foreground leading-relaxed", children: it.desc })
    ] })
  ] }, it.title)) }) }) });
}
function About() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Về chúng tôi", title: "15 năm đồng hành cùng ngành cơ khí inox Việt Nam", desc: "Thành lập từ 2010, INOX AN HƯNG phát triển từ xưởng cơ khí gia đình thành đơn vị sản xuất – gia công inox quy mô lớn, với hệ thống máy laser fiber, chấn CNC và đội ngũ thợ hàn tay nghề cao." }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: ["Hệ thống máy laser fiber 3kW, chấn CNC 160 tấn", "Đội ngũ kỹ sư cơ khí và thợ hàn TIG/MIG bậc 5–7", "Đối tác sản xuất cho nhiều khách sạn 5 sao, nhà máy thực phẩm", "Giao hàng & lắp đặt toàn quốc"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-foreground/85", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }),
        " ",
        t
      ] }, t)) }),
      /* @__PURE__ */ jsxs(Link, { to: "/gioi-thieu", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all", children: [
        "Tìm hiểu thêm về chúng tôi ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-2xl bg-steel-gradient shadow-card-soft" }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-primary p-6 text-primary-foreground", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-4xl font-bold", children: "15+" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm opacity-80", children: "Năm kinh nghiệm trong ngành inox" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-accent/30 p-6", children: [
          /* @__PURE__ */ jsx(Award, { className: "text-accent", size: 28 }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-lg font-semibold text-primary", children: "ISO 9001:2015" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Hệ thống quản lý chất lượng" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-2xl bg-hero-gradient shadow-elegant" })
      ] })
    ] }) })
  ] }) });
}
function ProductsSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Sản phẩm", title: "Sản phẩm inox nổi bật", desc: "Các sản phẩm inox 304/201 tiêu chuẩn và gia công theo yêu cầu cho mọi ngành nghề." }),
      /* @__PURE__ */ jsxs(Link, { to: "/san-pham", className: "inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all", children: [
        "Xem tất cả ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: PRODUCTS.slice(0, 6).map((p) => /* @__PURE__ */ jsxs(Link, { to: "/san-pham/$slug", params: {
      slug: p.slug
    }, className: "group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-steel-gradient", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", width: 800, height: 600, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: "Inox 304" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1.5 font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.desc })
      ] })
    ] }, p.slug)) })
  ] }) });
}
function ServicesSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Dịch vụ", title: "Dịch vụ gia công inox chuyên sâu", desc: "Từ ý tưởng đến sản phẩm hoàn thiện — chúng tôi đảm nhận trọn gói.", center: true }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: SERVICES.map((s) => /* @__PURE__ */ jsxs(Link, { to: "/dich-vu/$slug", params: {
      slug: s.slug
    }, className: "group relative overflow-hidden rounded-2xl shadow-card-soft", children: [
      /* @__PURE__ */ jsx("img", { src: s.image, alt: s.name, loading: "lazy", width: 600, height: 800, className: "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 text-primary-foreground", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: s.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs opacity-85 line-clamp-2", children: s.short }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent", children: [
          "Chi tiết ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 12 })
        ] })
      ] })
    ] }, s.slug)) })
  ] }) });
}
function ProjectsSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-primary py-20 md:py-28 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent", children: "Dự án tiêu biểu" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-bold md:text-4xl", children: "Hàng nghìn công trình đã thực hiện" })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/du-an", className: "text-sm font-semibold text-accent hover:underline", children: "Xem tất cả →" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: PROJECTS.map((p) => /* @__PURE__ */ jsxs("div", { className: "group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", width: 1200, height: 900, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-accent", children: p.client }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-lg font-semibold", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm opacity-80 line-clamp-2", children: p.desc })
      ] })
    ] }, p.slug)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Khách hàng nói gì", title: "Khách hàng tin tưởng chúng tôi", center: true }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 shadow-card-soft", children: [
      /* @__PURE__ */ jsx(Quote, { className: "text-accent", size: 28 }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 flex gap-0.5 text-accent", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsx(Star, { size: 14, fill: "currentColor" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm leading-relaxed text-foreground/85", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-primary", children: t.name }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
      ] })
    ] }, t.name)) })
  ] }) });
}
function QuoteCta() {
  return /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-10 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Báo giá nhanh", title: "Nhận báo giá trong 30 phút", desc: "Mô tả sơ bộ nhu cầu của bạn, đội ngũ kỹ thuật sẽ liên hệ tư vấn và báo giá chi tiết." }),
      /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-2 text-sm text-foreground/85", children: [
        /* @__PURE__ */ jsx("li", { children: "✓ Tư vấn miễn phí, không ràng buộc" }),
        /* @__PURE__ */ jsx("li", { children: "✓ Khảo sát tận nơi tại Thanh Hóa và các tỉnh lân cận" }),
        /* @__PURE__ */ jsx("li", { children: "✓ Bản vẽ 3D minh hoạ trước khi sản xuất" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-card p-6 shadow-elegant md:p-8", children: /* @__PURE__ */ jsx(QuoteForm, {}) })
  ] }) });
}
function ContactBlock() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Liên hệ", title: "Ghé thăm xưởng của chúng tôi", center: true }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-primary p-7 text-primary-foreground", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "text-accent" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: "Địa chỉ xưởng" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm opacity-85", children: SITE.address }),
        /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent", children: [
          /* @__PURE__ */ jsx(Phone, { size: 14 }),
          " ",
          SITE.phone
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 overflow-hidden rounded-2xl border border-border shadow-card-soft", children: /* @__PURE__ */ jsx("iframe", { title: "Bản đồ INOX AN HƯNG", src: "https://www.google.com/maps?q=19.8216857,105.7604043&output=embed", className: "h-72 w-full md:h-full", loading: "lazy" }) })
    ] })
  ] }) });
}
export {
  HomePage as component
};

import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import { S as SiteFooter, F as FloatingContacts } from "./FloatingContacts-8TCJXb18.js";
import { S as SectionTitle } from "./SectionTitle-BSGj9paT.js";
import { Factory, Wrench, Users, Award, Target, History } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-DRcL3C_y.js";
import "@tanstack/react-query";
import "zod";
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "bg-hero-gradient py-20 text-primary-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: "Giới thiệu công ty" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "INOX AN HƯNG — 15 năm dẫn đầu" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-white/85", children: "Từ một xưởng cơ khí nhỏ thành đơn vị sản xuất – gia công inox hàng đầu khu vực phía Nam." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Lịch sử", title: "Hành trình hình thành & phát triển" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-6", children: [{
            year: "2010",
            title: "Khởi nghiệp",
            desc: "Thành lập xưởng cơ khí inox đầu tiên tại đông thọ, thành phố Thanh Hóa với 5 thợ lành nghề."
          }, {
            year: "2015",
            title: "Mở rộng quy mô",
            desc: "Đầu tư máy chấn CNC, mở rộng nhà xưởng lên 1.500 m², phục vụ khách hàng nhà hàng – khách sạn."
          }, {
            year: "2019",
            title: "Công nghệ laser",
            desc: "Nhập khẩu máy laser fiber 3kW, nâng năng lực gia công chi tiết theo bản vẽ."
          }, {
            year: "2024",
            title: "Vươn ra toàn quốc",
            desc: "Hoàn tất hơn 1.500 công trình, mở rộng cung ứng cho nhà máy thực phẩm và công trình dân dụng cao cấp."
          }].map((t) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
            /* @__PURE__ */ jsx("div", { className: "shrink-0 w-20 font-display text-2xl font-bold text-accent", children: t.year }),
            /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-accent pl-5", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-primary", children: t.title }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: t.desc })
            ] })
          ] }, t.year)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: [{
          icon: Factory,
          title: "Năng lực sản xuất",
          desc: "Nhà xưởng 1.500 m², công suất 80–120 sản phẩm/tuần."
        }, {
          icon: Wrench,
          title: "Hệ thống máy móc",
          desc: "Laser fiber 3kW, chấn CNC 160 tấn, máy cắt plasma, máy đánh bóng tự động."
        }, {
          icon: Users,
          title: "Đội ngũ",
          desc: "30+ kỹ sư & thợ hàn bậc 5–7, đào tạo liên tục về kỹ thuật mới."
        }, {
          icon: Award,
          title: "Chứng nhận",
          desc: "ISO 9001:2015 — Hệ thống quản lý chất lượng đạt chuẩn quốc tế."
        }, {
          icon: Target,
          title: "Cam kết",
          desc: "Đúng vật liệu, đúng tiến độ, bảo hành 24 tháng, hỗ trợ kỹ thuật trọn đời."
        }, {
          icon: History,
          title: "Khách hàng",
          desc: "Hơn 600 doanh nghiệp tin chọn: nhà hàng, khách sạn, nhà máy, công trình."
        }].map((c) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card-soft", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent", children: /* @__PURE__ */ jsx(c.icon, { size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-primary", children: c.title }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: c.desc })
          ] })
        ] }, c.title)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(FloatingContacts, {})
  ] });
}
export {
  AboutPage as component
};

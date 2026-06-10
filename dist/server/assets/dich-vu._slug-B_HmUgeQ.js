import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteHeader } from "./SiteHeader-D3uu_Zp1.js";
import "react";
import "lucide-react";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsx(SiteHeader, {}),
  /* @__PURE__ */ jsxs("div", { className: "container-page py-32 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Không tìm thấy dịch vụ" }),
    /* @__PURE__ */ jsx(Link, { to: "/dich-vu", className: "mt-6 inline-block text-accent", children: "← Quay lại" })
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};

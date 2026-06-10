import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
function QuoteForm({ compact = false }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }
  if (sent) {
    return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-accent/30 bg-accent/5 p-6 text-center", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "mx-auto text-accent", size: 36 }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: "Đã gửi yêu cầu!" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Bộ phận kinh doanh sẽ liên hệ bạn trong vòng 30 phút." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: `grid gap-3 ${compact ? "" : "md:grid-cols-2"}`, children: [
    /* @__PURE__ */ jsx("input", { required: true, name: "name", placeholder: "Họ và tên *", className: "rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" }),
    /* @__PURE__ */ jsx("input", { required: true, name: "phone", type: "tel", placeholder: "Số điện thoại *", className: "rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" }),
    /* @__PURE__ */ jsx("input", { name: "email", type: "email", placeholder: "Email", className: `rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${compact ? "" : "md:col-span-2"}` }),
    /* @__PURE__ */ jsx("textarea", { required: true, name: "message", rows: 4, placeholder: "Mô tả yêu cầu gia công (kích thước, số lượng, vật liệu…) *", className: `rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${compact ? "" : "md:col-span-2"}` }),
    /* @__PURE__ */ jsxs("button", { type: "submit", disabled: loading, className: `inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-glow disabled:opacity-60 ${compact ? "" : "md:col-span-2"}`, children: [
      /* @__PURE__ */ jsx(Send, { size: 16 }),
      " ",
      loading ? "Đang gửi…" : "Gửi yêu cầu báo giá"
    ] })
  ] });
}
export {
  QuoteForm as Q
};

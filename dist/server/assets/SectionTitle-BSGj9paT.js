import { jsxs, jsx } from "react/jsx-runtime";
function SectionTitle({ eyebrow, title, desc, center }) {
  return /* @__PURE__ */ jsxs("div", { className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxs("div", { className: `inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent`, children: [
      /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-accent" }),
      " ",
      eyebrow
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-bold text-primary text-balance md:text-4xl", children: title }),
    desc && /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: desc })
  ] });
}
export {
  SectionTitle as S
};

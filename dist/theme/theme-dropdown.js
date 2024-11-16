import { jsxs as n, jsx as e } from "react/jsx-runtime";
const o = ({ themes: a = ["light", "dark"] }) => /* @__PURE__ */ n("div", { className: "dropdown min-w-max", children: [
  /* @__PURE__ */ n("div", { tabIndex: 0, role: "button", className: "btn", children: [
    "Theme",
    /* @__PURE__ */ e("svg", { width: "12px", height: "12px", className: "inline-block h-2 w-2 fill-current opacity-60", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2048 2048", children: /* @__PURE__ */ e("path", { d: "M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" }) })
  ] }),
  /* @__PURE__ */ e("ul", { tabIndex: 0, className: "dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl", children: a.map((t) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("input", { type: "radio", name: "theme-dropdown", className: "theme-controller btn btn-sm btn-block btn-ghost justify-start", "aria-label": t, value: t }) }, t)) })
] });
export {
  o as default
};

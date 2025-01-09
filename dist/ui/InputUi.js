import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { useState as x } from "react";
import { EyeSlash as w, Eye as I, KeyIcon as N, UserIcon as g, EmailIcon as v, SearchIcon as E } from "../icons/input-ui-icons.js";
const p = ({ type: s }) => {
  switch (s) {
    case "search":
      return /* @__PURE__ */ t(E, {});
    case "email":
      return /* @__PURE__ */ t(v, {});
    case "username":
      return /* @__PURE__ */ t(g, {});
    case "password":
      return /* @__PURE__ */ t(N, {});
    default:
      return null;
  }
}, U = ({ label: s, type: e, position: o, id: i, onClick: c, onChange: d, error: a, ...u }) => {
  const [r, m] = x(e), f = ["text", "email", "password", "textarea"], h = (l) => {
    c && c(l), e === "password" && m(r === "password" ? "text" : "password");
  };
  return /* @__PURE__ */ n("div", { className: "w-full gap-1 flex flex-col items-start", children: [
    s && /* @__PURE__ */ t("p", { className: "w-full pl-2 text-left", children: s }),
    /* @__PURE__ */ n("label", { className: `w-full input input-bordered flex items-center gap-2 ${a && "input-error"}`, children: [
      o === "left" && /* @__PURE__ */ t("div", { className: "tooltip tooltip-left", "data-tip": s || e, children: /* @__PURE__ */ t(p, { type: e }) }),
      /* @__PURE__ */ t("input", { type: f.includes(e) ? r : "text", title: i, id: i, className: "grow", placeholder: e, onChange: d, ...u }),
      e === "password" && /* @__PURE__ */ t("div", { className: "cursor-pointer tooltip tooltip-right", "data-tip": r === "text" ? "hide" : "show", onClick: (l) => h(l), children: r === "text" && /* @__PURE__ */ t(w, {}) || r === "password" && /* @__PURE__ */ t(I, {}) }),
      o === "right" && /* @__PURE__ */ t("div", { className: "tooltip tooltip-left", "data-tip": s || e, children: /* @__PURE__ */ t(p, { type: e }) })
    ] }),
    a && /* @__PURE__ */ t("p", { className: "w-full pl-2 text-left error text-error text-sm", children: a })
  ] });
};
export {
  U as default
};

import { jsxs as p, jsx as t } from "react/jsx-runtime";
import { useState as h } from "react";
import { EyeSlash as w, Eye as I, KeyIcon as N, UserIcon as g, EmailIcon as v, SearchIcon as $ } from "../icons/input-ui-icons.js";
const u = ({ type: a }) => {
  switch (a) {
    case "search":
      return /* @__PURE__ */ t($, {});
    case "email":
      return /* @__PURE__ */ t(v, {});
    case "username":
      return /* @__PURE__ */ t(g, {});
    case "password":
      return /* @__PURE__ */ t(N, {});
    default:
      return null;
  }
}, j = ({ label: a, type: e, position: c, id: s, onClick: i, onChange: n, error: l, ...d }) => {
  const [r, x] = h(e), m = ["text", "email", "password", "textarea"], f = (o) => {
    i && i(o), e === "password" && x(r === "password" ? "text" : "password");
  };
  return /* @__PURE__ */ p("div", { className: "w-full gap-1 flex flex-col items-start", children: [
    a && /* @__PURE__ */ t("p", { className: "w-full pl-2 text-left", children: a }),
    /* @__PURE__ */ p("label", { className: `w-full ${e === "textarea" ? "textarea textarea-bordered" : "input input-bordered"} flex items-center gap-2 ${l && "input-error"}`, children: [
      c === "left" && /* @__PURE__ */ t("div", { className: "tooltip tooltip-left", "data-tip": a || e, children: /* @__PURE__ */ t(u, { type: e }) }),
      e === "textarea" ? /* @__PURE__ */ t("textarea", { title: `${s}_textarea`, id: `${s}_textarea`, className: "grow", placeholder: e, onChange: n, ...d }) : /* @__PURE__ */ t("input", { type: m.includes(e) ? r : "text", title: s, id: s, className: "grow", placeholder: e, onChange: n, ...d }),
      e === "password" && /* @__PURE__ */ t("div", { className: "cursor-pointer tooltip tooltip-right", "data-tip": r === "text" ? "hide" : "show", onClick: (o) => f(o), children: r === "text" && /* @__PURE__ */ t(w, {}) || r === "password" && /* @__PURE__ */ t(I, {}) }),
      c === "right" && /* @__PURE__ */ t("div", { className: "tooltip tooltip-left", "data-tip": a || e, children: /* @__PURE__ */ t(u, { type: e }) })
    ] }),
    l && /* @__PURE__ */ t("p", { className: "w-full pl-2 text-left error text-error text-sm", children: l })
  ] });
};
export {
  j as default
};

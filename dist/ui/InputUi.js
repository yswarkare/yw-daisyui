import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { useState as h } from "react";
import { KeyIcon as w, UserIcon as I, EmailIcon as N, SearchIcon as g } from "../icons/input-ui-icons.js";
const u = ({ type: r }) => {
  switch (r) {
    case "search":
      return /* @__PURE__ */ e(g, {});
    case "email":
      return /* @__PURE__ */ e(N, {});
    case "username":
      return /* @__PURE__ */ e(I, {});
    case "password":
      return /* @__PURE__ */ e(w, {});
    default:
      return null;
  }
}, S = ({ label: r, type: t, position: l, id: n, onClick: c, onChange: d, error: a, ...m }) => {
  const [f, p] = h(t), x = ["text", "email", "password"], i = (s) => {
    c && c(s), t === "password" && p(f === "password" ? "text" : "password");
  };
  return /* @__PURE__ */ o("div", { className: "w-full flex flex-col items-start", children: [
    r && /* @__PURE__ */ e("p", { className: "w-full text-left", children: r }),
    /* @__PURE__ */ o("label", { className: "w-full input input-bordered flex items-center gap-2", children: [
      l === "left" && /* @__PURE__ */ e("div", { onClick: (s) => i(s), children: /* @__PURE__ */ e(u, { type: t }) }),
      /* @__PURE__ */ e("input", { type: x.includes(t) ? t : "text", title: n, id: n, className: "grow", placeholder: t, onChange: d, ...m }),
      l === "right" && /* @__PURE__ */ e("div", { onClick: (s) => i(s), children: /* @__PURE__ */ e(u, { type: t }) })
    ] }),
    a && /* @__PURE__ */ e("p", { className: "w-full text-left text-red-500 text-sm", children: a })
  ] });
};
export {
  S as default
};

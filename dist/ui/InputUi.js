import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { useState as m } from "react";
import { KeyIcon as f, UserIcon as h, EmailIcon as I, SearchIcon as w } from "../icons/input-ui-icons.js";
const i = ({ type: r }) => {
  switch (r) {
    case "search":
      return /* @__PURE__ */ e(w, {});
    case "email":
      return /* @__PURE__ */ e(I, {});
    case "username":
      return /* @__PURE__ */ e(h, {});
    case "password":
      return /* @__PURE__ */ e(f, {});
    default:
      return null;
  }
}, j = ({ type: r, position: t, id: n, onClick: a, onChange: l, ...u }) => {
  const [c, d] = m(r), o = (s) => {
    a && a(s), r === "password" && d(c === "password" ? "text" : "password");
  };
  return /* @__PURE__ */ p("label", { className: "input input-bordered flex items-center gap-2", children: [
    t === "left" && /* @__PURE__ */ e("div", { onClick: (s) => o(s), children: /* @__PURE__ */ e(i, { type: r }) }),
    /* @__PURE__ */ e("input", { type: c === "password" ? "password" : "text", title: n, id: n, className: "grow", placeholder: r, onChange: l, ...u }),
    t === "right" && /* @__PURE__ */ e("div", { onClick: (s) => o(s), children: /* @__PURE__ */ e(i, { type: r }) })
  ] });
};
export {
  j as default
};

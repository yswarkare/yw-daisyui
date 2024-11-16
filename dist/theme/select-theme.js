import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { useState as s, useEffect as n } from "react";
const u = ({ themes: a = ["light", "dark"] }) => {
  const [c, t] = s("");
  n(() => {
    const e = localStorage.getItem("color-theme");
    console.log(e), e || !("color-theme" in localStorage) && window.matchMedia(`(prefers-color-scheme: ${e})`).matches ? e && (t(e), document.documentElement.setAttribute("data-theme", e)) : t("dark");
  }, []);
  const r = (e = "") => {
    if (localStorage.getItem("color-theme"))
      document.documentElement.setAttribute("data-theme", e), localStorage.setItem("color-theme", e), t(e);
    else {
      const l = document.documentElement.getAttribute("data-theme");
      l ? (localStorage.setItem("color-theme", l), t(l)) : (document.documentElement.setAttribute("data-theme", e), localStorage.setItem("color-theme", e), t(e));
    }
  };
  return /* @__PURE__ */ o("label", { className: "px-2 flex flex-row gap-2", children: /* @__PURE__ */ m("select", { className: "select select-primary w-full min-w-max bg-base-300 shadow-2xl", title: "select-theme", name: "select-theme", value: c, onChange: (e) => r(e.target.value), children: [
    /* @__PURE__ */ o("option", { disabled: !0, selected: !0, children: "Theme" }),
    a.map((e) => /* @__PURE__ */ o("option", { title: e, className: "theme-controller bg-ghost", "aria-label": e, value: e, children: e }, e))
  ] }) });
};
export {
  u as default
};

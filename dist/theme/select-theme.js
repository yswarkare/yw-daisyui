import { jsxs as r, jsx as l } from "react/jsx-runtime";
import { useState as n, useEffect as s } from "react";
const u = ({ themes: c = ["light", "dark"] }) => {
  const [a, t] = n("");
  s(() => {
    const e = localStorage.getItem("color-theme");
    console.log(e), e || !("color-theme" in localStorage) && window.matchMedia(`(prefers-color-scheme: ${e})`).matches ? e && (t(e), document.documentElement.setAttribute("data-theme", e)) : t("dark");
  }, []);
  const m = (e = "") => {
    if (localStorage.getItem("color-theme"))
      document.documentElement.setAttribute("data-theme", e), localStorage.setItem("color-theme", e), t(e);
    else {
      const o = document.documentElement.getAttribute("data-theme");
      o ? (localStorage.setItem("color-theme", o), t(o)) : (document.documentElement.setAttribute("data-theme", e), localStorage.setItem("color-theme", e), t(e));
    }
  };
  return /* @__PURE__ */ r("label", { className: "px-2 flex flex-row gap-2", children: [
    /* @__PURE__ */ l("span", { children: "Theme" }),
    /* @__PURE__ */ l("select", { title: "theme", value: a, onChange: (e) => m(e.target.value), children: c.map((e) => /* @__PURE__ */ l("option", { children: e }, e)) })
  ] });
};
export {
  u as default
};

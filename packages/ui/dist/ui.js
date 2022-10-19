import { defineComponent as _, computed as a, openBlock as d, createElementBlock as u, normalizeClass as c, unref as n, Fragment as b, createElementVNode as g, createTextVNode as f, toDisplayString as h, createCommentVNode as C, renderSlot as z } from "vue";
var D = {}, x = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => i
  });
  function t(o, r) {
    return {
      handler: o,
      config: r
    };
  }
  t.withOptions = function(o, r = () => ({})) {
    const l = function(s) {
      return {
        __options: s,
        handler: o(s),
        config: r(s)
      };
    };
    return l.__isOptionsFunction = !0, l.__pluginFunction = o, l.__configFunction = r, l;
  };
  const i = t;
})(x);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => o
  });
  const t = /* @__PURE__ */ i(x);
  function i(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = t.default;
})(D);
let F = D;
var P = (F.__esModule ? F : { default: F }).default;
const G = P(function() {
}, {
  content: [],
  theme: {
    extend: {
      height: {
        modal: "calc(100% - 2rem)"
      },
      boxShadow: {
        "sm-light": "0 2px 5px 0px rgba(255, 255, 255, 0.08)"
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"
        },
        red: {
          50: "#FDF2F2",
          100: "#FDE8E8",
          200: "#FBD5D5",
          300: "#F8B4B4",
          400: "#F98080",
          500: "#F05252",
          600: "#E02424",
          700: "#C81E1E",
          800: "#9B1C1C",
          900: "#771D1D"
        },
        orange: {
          50: "#FFF8F1",
          100: "#FEECDC",
          200: "#FCD9BD",
          300: "#FDBA8C",
          400: "#FF8A4C",
          500: "#FF5A1F",
          600: "#D03801",
          700: "#B43403",
          800: "#8A2C0D",
          900: "#771D1D"
        },
        yellow: {
          50: "#FDFDEA",
          100: "#FDF6B2",
          200: "#FCE96A",
          300: "#FACA15",
          400: "#E3A008",
          500: "#C27803",
          600: "#9F580A",
          700: "#8E4B10",
          800: "#723B13",
          900: "#633112"
        },
        green: {
          50: "#F3FAF7",
          100: "#DEF7EC",
          200: "#BCF0DA",
          300: "#84E1BC",
          400: "#31C48D",
          500: "#0E9F6E",
          600: "#057A55",
          700: "#046C4E",
          800: "#03543F",
          900: "#014737"
        },
        teal: {
          50: "#EDFAFA",
          100: "#D5F5F6",
          200: "#AFECEF",
          300: "#7EDCE2",
          400: "#16BDCA",
          500: "#0694A2",
          600: "#047481",
          700: "#036672",
          800: "#05505C",
          900: "#014451"
        },
        blue: {
          50: "#EBF5FF",
          100: "#E1EFFE",
          200: "#C3DDFD",
          300: "#A4CAFE",
          400: "#76A9FA",
          500: "#3F83F8",
          600: "#1C64F2",
          700: "#1A56DB",
          800: "#1E429F",
          900: "#233876"
        },
        indigo: {
          50: "#F0F5FF",
          100: "#E5EDFF",
          200: "#CDDBFE",
          300: "#B4C6FC",
          400: "#8DA2FB",
          500: "#6875F5",
          600: "#5850EC",
          700: "#5145CD",
          800: "#42389D",
          900: "#362F78"
        },
        purple: {
          50: "#F6F5FF",
          100: "#EDEBFE",
          200: "#DCD7FE",
          300: "#CABFFD",
          400: "#AC94FA",
          500: "#9061F9",
          600: "#7E3AF2",
          700: "#6C2BD9",
          800: "#5521B5",
          900: "#4A1D96"
        },
        pink: {
          50: "#FDF2F8",
          100: "#FCE8F3",
          200: "#FAD1E8",
          300: "#F8B4D9",
          400: "#F17EB8",
          500: "#E74694",
          600: "#D61F69",
          700: "#BF125D",
          800: "#99154B",
          900: "#751A3D"
        }
      }
    }
  }
});
var v = /* @__PURE__ */ ((e) => (e.xs = "xs", e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e))(v || {});
const p = {
  xs: {
    button: "py-2 px-3 text-xs font-medium",
    icon: "w-3.5 h-3.5"
  },
  sm: {
    button: "py-2 px-3 text-sm font-medium",
    icon: "w-4 h-4"
  },
  md: {
    button: "py-2.5 px-5 text-sm font-medium",
    icon: "w-5 h-5"
  },
  lg: {
    button: "py-3 px-5 text-base font-medium",
    icon: "w-5 h-5"
  },
  xl: {
    button: "py-3.5 px-6 text-base font-medium",
    icon: "w-6 h-6"
  }
};
var B = /* @__PURE__ */ ((e) => (e.default = "default", e.success = "success", e.error = "error", e.info = "info", e.warning = "warning", e))(B || {});
const m = {
  default: {
    button: "text-gray-900 bg-white border-2 border-white hover:bg-gray-200 hover:border-gray-200 hover:text-black focus:ring-gray-200",
    outlined: "text-gray-700 bg-transparent border-2 border-gray-700 hover:bg-white hover:border-white hover:text-gray-700 focus:ring-white"
  },
  success: {
    button: "text-white bg-green-700 border-2 border-green-700 hover:bg-green-800 hover:border-green-800 focus:ring-green-300",
    outlined: "text-green-700 bg-transparent border-2 border-green-700 hover:bg-green-700 hover:border-green-700 hover:text-white focus:ring-green-300"
  },
  error: {
    button: "text-white bg-red-700 border-2 border-red-700 hover:bg-red-800 hover:border-red-800 focus:ring-red-300",
    outlined: "text-red-700 bg-transparent border-2 border-red-700 hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-red-300"
  },
  info: {
    button: "text-white bg-blue-700 border-2 border-blue-700 hover:bg-blue-800 hover:border-blue-800 focus:ring-blue-300",
    outlined: "text-blue-700 bg-transparent border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-700 hover:text-white focus:ring-blue-300"
  },
  warning: {
    button: "text-white bg-orange-700 border-2 border-orange-700 hover:bg-orange-800 hover:border-orange-800 focus:ring-orange-300",
    outlined: "text-orange-700 bg-transparent border-2 border-orange-700 hover:bg-orange-700 hover:border-orange-700 hover:text-white focus:ring-orange-300"
  }
}, k = ["type"], M = /* @__PURE__ */ g("path", {
  class: "fill-gray-300",
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
}, null, -1), $ = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), N = [
  $
], T = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), V = [
  T
], j = /* @__PURE__ */ _({
  __name: "BaseButton",
  props: {
    label: { default: "" },
    iconLeft: { default: "" },
    iconRight: { default: "" },
    type: { default: "button" },
    rounded: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingText: { default: "Loading ..." },
    size: { default: v.md },
    color: { default: B.default }
  },
  setup(e) {
    const t = e, i = a(() => t.rounded ? "rounded-full" : ""), o = a(
      () => t.outlined ? m[t.color].outlined : ""
    ), r = a(() => t.size ? p[t.size].button : ""), l = a(() => t.size ? p[t.size].icon : ""), s = a(
      () => t.outlined ? "" : m[t.color].button
    ), E = a(
      () => t.disabled ? "cursor-not-allowed bg-gray-50 opacity-20 border-0 !text-gray-700 !ring-0 hover:bg-gray-50" : ""
    ), w = {
      default: "fill-gray-900",
      success: "fill-green-900",
      error: "fill-red-900",
      info: "fill-blue-900",
      warning: "fill-orange-900"
    }, y = a(() => w[t.color]);
    return (A, q) => (d(), u("button", {
      type: e.type,
      class: c(["transition-all duration-100 text-center inline-flex items-center gap-4 focus:ring-1", [n(i), n(o), n(r), n(s), n(E)]])
    }, [
      e.loading ? (d(), u(b, { key: 0 }, [
        (d(), u("svg", {
          "aria-hidden": "true",
          role: "status",
          class: c(["inline animate-spin", n(l)]),
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          M,
          g("path", {
            class: c(n(y)),
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          }, null, 2)
        ], 2)),
        f(" " + h(e.loadingText), 1)
      ], 64)) : (d(), u(b, { key: 1 }, [
        e.iconLeft ? (d(), u("svg", {
          key: 0,
          "aria-hidden": "true",
          class: c(n(l)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, N, 2)) : C("", !0),
        z(A.$slots, "default", {}, () => [
          f(h(e.label), 1)
        ]),
        e.iconRight ? (d(), u("svg", {
          key: 1,
          "aria-hidden": "true",
          class: c(n(l)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, V, 2)) : C("", !0)
      ], 64))
    ], 10, k));
  }
}), H = {
  autoImport: {
    components: !0
  }
}, O = { BaseButton: j }, J = (e, t) => {
  ({ ...H, ...t }).autoImport.components && Object.entries({ ...O }).forEach(([o, r]) => {
    e.component(o, r);
  });
};
export {
  j as BaseButton,
  G as Plugin,
  J as default
};

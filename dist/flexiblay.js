import { defineComponent as s, toRef as y, provide as m, computed as u, openBlock as i, createElementBlock as c, normalizeClass as r, normalizeStyle as S, unref as o, renderSlot as f, inject as $, createTextVNode as v, toDisplayString as x } from "vue";
const g = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [l, a] of e)
    n[l] = a;
  return n;
}, b = s({ name: "LayRow" }), h = /* @__PURE__ */ Object.assign(b, {
  props: {
    gutter: { type: [String, Number], default: null },
    justify: String,
    align: String,
    alignContent: String
  },
  setup(t) {
    const n = y(t, "gutter");
    m("gutter", n);
    const l = u(
      () => n.value && {
        marginLeft: `-${n.value / 2}px`,
        marginRight: `-${n.value / 2}px`
      }
    );
    return (a, d) => (i(), c("div", {
      class: r({
        ["lay-row"]: !0,
        [`justify-${t.justify}`]: t.justify,
        [`align-${t.align}`]: t.align,
        [`align-content-${t.alignContent}`]: t.alignContent
      }),
      style: S(o(l))
    }, [
      f(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), N = /* @__PURE__ */ g(h, [["__scopeId", "data-v-5fb24b3e"]]);
const j = s({ name: "LayCol" }), C = /* @__PURE__ */ Object.assign(j, {
  props: {
    span: { type: [Number, String], default: null },
    xs: { type: [Number, String], default: null },
    sm: { type: [Number, String], default: null },
    md: { type: [Number, String], default: null },
    lg: { type: [Number, String], default: null },
    xl: { type: [Number, String], default: null },
    offset: { type: [Number, String], default: null },
    pull: { type: [Number, String], default: null },
    push: { type: [Number, String], default: null },
    order: { type: [Number, String], default: null },
    align: String
  },
  setup(t) {
    const e = $("gutter"), n = u(
      () => e.value && {
        paddingLeft: `${e.value / 2}px`,
        paddingRight: `${e.value / 2}px`
      }
    );
    return (l, a) => (i(), c("div", {
      class: r([
        "lay-col",
        t.span && `lay-col-${t.span}`,
        t.xl && `lay-col-xl-${t.xl}`,
        t.lg && `lay-col-lg-${t.lg}`,
        t.md && `lay-col-md-${t.md}`,
        t.sm && `lay-col-sm-${t.sm}`,
        t.xs && `lay-col-xs-${t.xs}`,
        t.offset && `lay-col-offset-${t.offset}`,
        t.pull && `lay-col-pull-${t.pull}`,
        t.push && `lay-col-push-${t.push}`,
        t.order && `lay-col-order-${t.order}`,
        t.align && `align-${t.align}`
      ]),
      style: S(o(n))
    }, [
      f(l.$slots, "default", {}, void 0, !0),
      v(" " + x(o(e)), 1)
    ], 6));
  }
}), L = /* @__PURE__ */ g(C, [["__scopeId", "data-v-36399233"]]), w = [N, L];
const B = s({ name: "LayFlex" }), _ = /* @__PURE__ */ Object.assign(B, {
  props: {
    inline: { type: Boolean, default: !1 },
    span: { type: [Number, String], default: null },
    stretch: { type: Boolean, default: !1 },
    column: { type: Boolean, default: !1 },
    wrap: { type: Boolean, default: !1 },
    justify: String,
    align: String,
    alignContent: String,
    alignSelf: String,
    autoSpan: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, n = y(e, "autoSpan");
    m("autoSpan", n);
    const l = $("autoSpan", !1), a = u(() => l.value ? 1 : e.span), d = u(() => ({
      [`lay-flex${e.inline ? "__inline" : ""}`]: !0,
      [`lay-flex-${a.value}`]: a.value,
      ["is-stretch"]: e.stretch,
      ["is-column"]: e.column,
      ["is-wrap"]: e.wrap,
      [`justify-${e.justify}`]: e.justify,
      [`align-${e.align}`]: e.align,
      [`align-content-${e.alignContent}`]: e.alignContent,
      [`align-self-${e.alignSelf}`]: e.alignSelf
    }));
    return (p, F) => (i(), c("div", {
      class: r(o(d))
    }, [
      f(p.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), R = /* @__PURE__ */ g(_, [["__scopeId", "data-v-d4551140"]]), O = [R];
const k = [...w, ...O];
function z(t) {
  k.forEach((e) => {
    t.component(e.name, e);
  });
}
export {
  z as default
};

"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true },
    position: { type: String, required: true },
    tips: { type: String, required: true },
    type: { type: String, required: true }
  },
  emits: ["input"],
  setup(__props, { emit }) {
    const props = __props;
    common_vendor.useCssVars((_ctx) => ({
      "15c50f14-ifTop": ifTop.value
    }));
    const ifTop = common_vendor.ref(props.position == "left" ? "flex" : "block");
    const content = common_vendor.ref();
    const select = () => {
      emit("input", content.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.title),
        b: props.tips,
        c: common_vendor.o([($event) => content.value = $event.detail.value, select]),
        d: props.type,
        e: content.value,
        f: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15c50f14"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/InputBox/index.vue"]]);
wx.createComponent(Component);

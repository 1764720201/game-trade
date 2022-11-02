"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    option: { type: Array, required: true }
  },
  emits: ["option"],
  setup(__props, { emit }) {
    const props = __props;
    const currentOption = common_vendor.ref(0);
    const changeOption = (index) => {
      currentOption.value = index;
      emit("option", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.option, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.o(($event) => changeOption(item.value), item.value),
            d: common_vendor.s(item.value == currentOption.value ? {
              fontWeight: 900
            } : {
              color: "#ccc"
            })
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f5756c60"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/About/index.vue"]]);
wx.createComponent(Component);

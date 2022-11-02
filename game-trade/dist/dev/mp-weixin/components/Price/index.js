"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    price: { type: Number, required: true }
  },
  setup(__props) {
    const props = __props;
    const service = common_vendor.ref(0);
    const truth = common_vendor.ref(0);
    common_vendor.watch(
      () => props.price,
      (newValue) => {
        service.value = newValue * 0.05;
        if (service.value < 20 && service.value > 0) {
          service.value = 20;
        }
        truth.value = newValue - service.value;
        if (truth.value < 0) {
          truth.value = 0;
        }
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(service.value.toFixed(2)),
        b: common_vendor.t(truth.value.toFixed(2))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0c06dc8c"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Price/index.vue"]]);
wx.createComponent(Component);

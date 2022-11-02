"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  _easycom_uni_data_checkbox2();
}
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  _easycom_uni_data_checkbox();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    range: { type: Array, required: true },
    title: { type: String, required: false }
  },
  emits: ["check"],
  setup(__props, { emit }) {
    const props = __props;
    const check = common_vendor.ref(-1);
    const select = () => {
      emit("check", check.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.title),
        b: common_vendor.o(select),
        c: common_vendor.o(($event) => check.value = $event),
        d: common_vendor.p({
          selectedColor: "#dcddea",
          selectedTextColor: "#000",
          localdata: props.range,
          mode: "tag",
          modelValue: check.value
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c88ad8b"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Check/index.vue"]]);
wx.createComponent(Component);

"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    ifShowNext: { type: Boolean, required: false },
    title: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(props.title),
        b: props.ifShowNext
      }, props.ifShowNext ? {
        c: common_vendor.p({
          type: "arrow-right",
          size: "20",
          color: "white"
        })
      } : {}, {
        d: common_vendor.o(($event) => _ctx.$emit("click", $event))
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-28521965"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Button/index.vue"]]);
wx.createComponent(Component);

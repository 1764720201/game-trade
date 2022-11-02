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
    name: { type: String, required: true },
    tips: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.name),
        b: common_vendor.t(props.tips),
        c: common_vendor.p({
          type: "forward",
          size: "23",
          color: "#aeaeae"
        }),
        d: common_vendor.o(($event) => _ctx.$emit("click", $event))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f75b63f4"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Item/index.vue"]]);
wx.createComponent(Component);

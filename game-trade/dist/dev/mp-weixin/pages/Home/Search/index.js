"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const goSearchDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Home/Search/SearchDetail/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "30",
          color: "#1296db"
        }),
        b: common_vendor.o(goSearchDetail)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15b00d87"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Home/Search/index.vue"]]);
wx.createComponent(Component);

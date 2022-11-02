"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const goMyCollect = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/MyCollect/index"
      });
    };
    const goMyPurcharse = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/MyPurcharse/index"
      });
    };
    const goMyIssue = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/MyIssue/index"
      });
    };
    const goMySale = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/MySale/index"
      });
    };
    const goVerify = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/Verify/index"
      });
    };
    const goAfterSale = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/AfterSale/index"
      });
    };
    const goMyWallet = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/MyWallet/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goMyCollect),
        b: common_vendor.o(goVerify),
        c: common_vendor.o(goAfterSale),
        d: common_vendor.o(goMyPurcharse),
        e: common_vendor.o(goMyIssue),
        f: common_vendor.o(goMySale),
        g: common_vendor.o(goMyWallet)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea872ad0"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/About/index.vue"]]);
wx.createComponent(Component);

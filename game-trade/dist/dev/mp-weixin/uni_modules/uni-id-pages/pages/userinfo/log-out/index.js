"use strict";
var common_vendor = require("../../../../../common/vendor.js");
var uni_modules_uniIdPages_common_store = require("../../../common/store.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(
          (...args) => common_vendor.unref(uni_modules_uniIdPages_common_store.mutations).logout && common_vendor.unref(uni_modules_uniIdPages_common_store.mutations).logout(...args)
        )
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5be27bbd"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/uni_modules/uni-id-pages/pages/userinfo/log-out/index.vue"]]);
wx.createComponent(Component);

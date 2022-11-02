"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { detail, option } = common_vendor.storeToRefs(store.detail);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(option) == "\u6E38\u620F\u622A\u56FE"
      }, common_vendor.unref(option) == "\u6E38\u620F\u622A\u56FE" ? {
        b: common_vendor.f(common_vendor.unref(detail).screenshot, (item, k0, i0) => {
          return {
            a: item.url,
            b: item.name
          };
        })
      } : {}, {
        c: common_vendor.unref(option) == "\u8D26\u53F7\u4FE1\u606F"
      }, common_vendor.unref(option) == "\u8D26\u53F7\u4FE1\u606F" ? {
        d: common_vendor.t(common_vendor.unref(detail).email),
        e: common_vendor.t(common_vendor.unref(detail).level),
        f: common_vendor.t(common_vendor.unref(detail).otherBright ? common_vendor.unref(detail).otherBright : "\u65E0")
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d14d162"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Options/GenshinImpact/index.vue"]]);
wx.createComponent(Component);

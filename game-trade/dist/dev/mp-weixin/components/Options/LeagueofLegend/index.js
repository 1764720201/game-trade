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
        d: common_vendor.t(common_vendor.unref(detail).grading),
        e: common_vendor.t(common_vendor.unref(detail).amount),
        f: common_vendor.t(common_vendor.unref(detail).skin),
        g: common_vendor.t(common_vendor.unref(detail).dazzling),
        h: common_vendor.t(common_vendor.unref(detail).qualification)
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b2d7f152"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Options/LeagueofLegend/index.vue"]]);
wx.createComponent(Component);

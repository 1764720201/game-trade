"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(Search) + common_vendor.unref(Slide) + common_vendor.unref(Category))();
}
const Search = () => "./Search/index.js";
const Slide = () => "./Slide/index.js";
const Category = () => "./Category/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.onShow(async () => {
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1faf2446"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Home/index.vue"]]);
wx.createPage(MiniProgramPage);

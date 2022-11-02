"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(Data) + common_vendor.unref(About) + common_vendor.unref(Other))();
}
const Data = () => "./Data/index.js";
const About = () => "./About/index.js";
const Other = () => "./Other/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0cb8da8c"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/index.vue"]]);
wx.createPage(MiniProgramPage);

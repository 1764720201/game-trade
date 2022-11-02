"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(GenshinImpact) + common_vendor.unref(LeagueofLegend) + common_vendor.unref(GloryOfTheKing))();
}
const GenshinImpact = () => "./GenshinImpact/index.js";
const LeagueofLegend = () => "./LeagueofLegend/index.js";
const GloryOfTheKing = () => "./GloryOfTheKing/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const gameName = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      if (option.name) {
        gameName.value = option.name;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: gameName.value == "\u539F\u795E"
      }, gameName.value == "\u539F\u795E" ? {} : {}, {
        b: gameName.value == "\u82F1\u96C4\u8054\u76DF"
      }, gameName.value == "\u82F1\u96C4\u8054\u76DF" ? {} : {}, {
        c: gameName.value == "\u738B\u8005\u8363\u8000"
      }, gameName.value == "\u738B\u8005\u8363\u8000" ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c08fa6c"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Consignment/index.vue"]]);
wx.createPage(MiniProgramPage);

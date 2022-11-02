"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/user.js");
require("../../store/LeagueofLegend.js");
require("../../store/GenshinImpact.js");
require("../../store/GloryOfTheKing.js");
require("../../store/detail.js");
if (!Math) {
  (common_vendor.unref(GenshinImpact) + common_vendor.unref(LeagueofLegend) + common_vendor.unref(GloryOfTheKing))();
}
const GenshinImpact = () => "./GenshinImpact/index.js";
const LeagueofLegend = () => "./LeagueofLegend/index.js";
const GloryOfTheKing = () => "./GloryOfTheKing/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    game: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const store = store_index.useStore();
    const { option } = common_vendor.storeToRefs(store.detail);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(option)),
        b: props.game == "\u539F\u795E"
      }, props.game == "\u539F\u795E" ? {} : {}, {
        c: props.game == "\u82F1\u96C4\u8054\u76DF"
      }, props.game == "\u82F1\u96C4\u8054\u76DF" ? {} : {}, {
        d: props.game == "\u738B\u8005\u8363\u8000"
      }, props.game == "\u738B\u8005\u8363\u8000" ? {} : {}, {
        e: common_vendor.unref(option) == "\u6E38\u620F\u4EA4\u6D41\u7FA4"
      }, common_vendor.unref(option) == "\u6E38\u620F\u4EA4\u6D41\u7FA4" ? {} : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2b3cdcbe"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Options/index.vue"]]);
wx.createComponent(Component);

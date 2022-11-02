"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  _easycom_uni_dateformat2();
}
const _easycom_uni_dateformat = () => "../../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  _easycom_uni_dateformat();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userInfo } = common_vendor.storeToRefs(store.user);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          date: common_vendor.unref(userInfo).register_date,
          format: "yyyy-MM-dd hh:mm"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41efe078"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Message/Inform/index.vue"]]);
wx.createPage(MiniProgramPage);

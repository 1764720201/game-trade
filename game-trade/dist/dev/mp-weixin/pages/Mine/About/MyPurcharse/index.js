"use strict";
var common_vendor = require("../../../../common/vendor.js");
var store_index = require("../../../../store/index.js");
require("../../../../store/user.js");
require("../../../../store/LeagueofLegend.js");
require("../../../../store/GenshinImpact.js");
require("../../../../store/GloryOfTheKing.js");
require("../../../../store/detail.js");
if (!Math) {
  (common_vendor.unref(About) + common_vendor.unref(AboutOption))();
}
const AboutOption = () => "../../../../components/AboutOption/index.js";
const About = () => "../../../../components/About/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userId } = common_vendor.storeToRefs(store.user);
    const where = common_vendor.ref(`user_id=='${userId.value}'`);
    const issueOption = [
      {
        value: 0,
        text: "\u5168\u90E8"
      },
      {
        value: 1,
        text: "\u5DF2\u652F\u4ED8"
      },
      {
        value: 2,
        text: "\u4EA4\u6613\u6210\u529F"
      }
    ];
    const getOptionIndex = (index) => {
      switch (index) {
        case 0:
          where.value = `user_id=='${userId.value}'`;
          break;
        case 1:
          where.value = `user_id=='${userId.value}'&&state==${1}`;
          break;
        case 2:
          where.value = `user_id=='${userId.value}'&&state==${2}`;
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getOptionIndex),
        b: common_vendor.p({
          option: issueOption
        }),
        c: common_vendor.p({
          where: where.value,
          collection: "purchase"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/About/MyPurcharse/index.vue"]]);
wx.createPage(MiniProgramPage);

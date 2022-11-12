"use strict";
var common_vendor = require("../../../../common/vendor.js");
var store_index = require("../../../../store/index.js");
require("../../../../store/user.js");
require("../../../../store/LeagueofLegend.js");
require("../../../../store/GenshinImpact.js");
require("../../../../store/GloryOfTheKing.js");
require("../../../../store/detail.js");
if (!Math) {
  common_vendor.unref(Amend)();
}
const Amend = () => "../../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userInfo } = common_vendor.storeToRefs(store.user);
    const newName = common_vendor.ref(userInfo.value.nickname);
    const db = common_vendor.rn.database();
    const confirmAmend = async () => {
      await db.collection("uni-id-users").where(`_id=='${userInfo.value._id}'`).update({
        nickname: newName.value
      }).then(() => {
        store.user.getUserInfo();
      });
      common_vendor.index.navigateBack({
        success() {
          common_vendor.index.showToast({
            title: "\u6635\u79F0\u4FEE\u6539\u6210\u529F"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: newName.value,
        b: common_vendor.o(($event) => newName.value = $event.detail.value),
        c: common_vendor.o(confirmAmend),
        d: common_vendor.p({
          title: "\u786E\u8BA4\u4FEE\u6539"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4bdcb6d5"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Data/Amend/index.vue"]]);
wx.createPage(MiniProgramPage);

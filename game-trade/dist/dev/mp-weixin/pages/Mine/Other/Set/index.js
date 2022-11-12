"use strict";
var common_vendor = require("../../../../common/vendor.js");
var store_index = require("../../../../store/index.js");
require("../../../../store/user.js");
require("../../../../store/LeagueofLegend.js");
require("../../../../store/GenshinImpact.js");
require("../../../../store/GloryOfTheKing.js");
require("../../../../store/detail.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (common_vendor.unref(Item) + common_vendor.unref(LogOut) + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const LogOut = () => "../../../../uni_modules/uni-id-pages/pages/userinfo/log-out/index.js";
const Item = () => "../../../../components/Item/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userId, userInfo } = common_vendor.storeToRefs(store.user);
    const db = common_vendor.rn.database();
    const inputDialog = common_vendor.ref(null);
    const bindMobile = () => {
      inputDialog.value.open();
    };
    const confirmBindMobile = async (e) => {
      await db.collection("uni-id-users").where(`_id=='${userId.value}'`).update({
        phone: e
      }).catch((e2) => console.log(e2));
      await store.user.getUserInfo();
      common_vendor.index.showToast({
        title: "\u4FEE\u6539\u624B\u673A\u53F7\u6210\u529F"
      });
    };
    const stop = (title) => {
      common_vendor.index.showToast({
        title,
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => stop("\u4E0D\u8BA9\u8BBE\u7F6E\u5BC6\u7801")),
        b: common_vendor.p({
          name: "\u8BBE\u7F6E\u5BC6\u7801"
        }),
        c: common_vendor.o(bindMobile),
        d: common_vendor.p({
          name: "\u624B\u673A\u53F7",
          tips: common_vendor.unref(userInfo).phone
        }),
        e: common_vendor.p({
          name: "\u5B9E\u540D\u8BA4\u8BC1",
          tips: "\u5DF2\u8BA4\u8BC1"
        }),
        f: common_vendor.p({
          name: "\u5F53\u524D\u7248\u672C",
          tips: "1.2.0"
        }),
        g: common_vendor.o(($event) => stop("\u6CA1\u6709\u534F\u8BAE")),
        h: common_vendor.p({
          name: "\u7528\u6237\u534F\u8BAE"
        }),
        i: common_vendor.o(($event) => stop("\u6CA1\u6709\u9690\u79C1")),
        j: common_vendor.p({
          name: "\u9690\u79C1\u653F\u7B56"
        }),
        k: common_vendor.o(($event) => stop("\u4E0D\u7ED9\u6CE8\u9500")),
        l: common_vendor.p({
          name: "\u6CE8\u9500\u8D26\u53F7"
        }),
        m: common_vendor.sr("inputClose", "33283c4e-9,33283c4e-8"),
        n: common_vendor.o(confirmBindMobile),
        o: common_vendor.p({
          mode: "input",
          title: "\u8F93\u5165\u624B\u673A\u53F7",
          value: common_vendor.unref(userInfo).phone,
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
        }),
        p: common_vendor.sr(inputDialog, "33283c4e-8", {
          "k": "inputDialog"
        }),
        q: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-33283c4e"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Other/Set/index.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
var common_vendor = require("../../../../common/vendor.js");
var store_index = require("../../../../store/index.js");
require("../../../../store/user.js");
require("../../../../store/LeagueofLegend.js");
require("../../../../store/GenshinImpact.js");
require("../../../../store/GloryOfTheKing.js");
require("../../../../store/detail.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup_dialog = () => "../../../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + common_vendor.unref(InputBox) + common_vendor.unref(Deposit) + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const InputBox = () => "../../../../components/InputBox/index.js";
const Deposit = () => "../../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { balance } = common_vendor.storeToRefs(store.user);
    const goDealDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/About/MyWallet/DealDetail/index"
      });
    };
    const inputDialog = common_vendor.ref(null);
    const recharge = () => {
      inputDialog.value.open();
    };
    const db = common_vendor.rn.database();
    const confirmRecharge = async (e) => {
      await db.collection("balance").add({
        money: parseFloat(e)
      });
      store.user.getBalance();
      common_vendor.index.showToast({
        title: "\u5145\u503C\u6210\u529F"
      });
    };
    const price = common_vendor.ref();
    const getPrice = (e) => {
      price.value = e;
    };
    const account = common_vendor.ref("");
    const getAccount = (e) => {
      account.value = e;
    };
    const withdraw = async () => {
      if (!price.value) {
        common_vendor.index.showToast({
          title: "\u8BF7\u8F93\u5165\u63D0\u73B0\u7684\u91D1\u989D",
          icon: "none"
        });
        return;
      }
      if (!account.value) {
        common_vendor.index.showToast({
          title: "\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u8D26\u53F7",
          icon: "none"
        });
        return;
      }
      if (price.value > balance.value) {
        common_vendor.index.showToast({
          title: "\u63D0\u73B0\u7684\u91D1\u989D\u4E0D\u80FD\u5927\u4E8E\u4F59\u989D",
          icon: "none"
        });
        return;
      }
      await db.collection("balance").add({
        money: -Number(price.value)
      });
      store.user.getBalance();
      common_vendor.index.showToast({
        title: "\u63D0\u73B0\u6210\u529F"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "forward",
          size: "18",
          color: "white"
        }),
        b: common_vendor.o(goDealDetail),
        c: common_vendor.t(common_vendor.unref(balance).toFixed(2)),
        d: common_vendor.o(recharge),
        e: common_vendor.o(getPrice),
        f: common_vendor.p({
          title: "\u63D0\u73B0\u91D1\u989D",
          position: "left",
          type: "number",
          tips: "\u8BF7\u8F93\u5165\u63D0\u73B0\u91D1\u989D"
        }),
        g: common_vendor.o(getAccount),
        h: common_vendor.p({
          title: "\u652F\u4ED8\u5B9D",
          position: "left",
          type: "text",
          tips: "\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u8D26\u53F7"
        }),
        i: common_vendor.o(withdraw),
        j: common_vendor.p({
          title: "\u63D0\u73B0"
        }),
        k: common_vendor.sr("inputClose", "92a6cd5c-5,92a6cd5c-4"),
        l: common_vendor.o(confirmRecharge),
        m: common_vendor.p({
          mode: "input",
          title: "\u7834\u89E3\u7248",
          value: _ctx.m,
          placeholder: "\u8BF7\u8F93\u5165\u5145\u503C\u7684\u91D1\u989D"
        }),
        n: common_vendor.sr(inputDialog, "92a6cd5c-4", {
          "k": "inputDialog"
        }),
        o: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-92a6cd5c"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/About/MyWallet/index.vue"]]);
wx.createPage(MiniProgramPage);

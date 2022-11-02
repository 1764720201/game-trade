"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (common_vendor.unref(Basic) + _easycom_uni_icons + common_vendor.unref(Order) + _easycom_uni_popup)();
}
const Basic = () => "../../../components/Basic/index.js";
const Order = () => "../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "91650a62-ifChecked": ifChecked.value
    }));
    const store = store_index.useStore();
    const { balance } = common_vendor.storeToRefs(store.user);
    const detail = common_vendor.ref();
    const db = common_vendor.pn.database();
    const checked = common_vendor.ref(false);
    const originPrice = common_vendor.ref();
    const ifChecked = common_vendor.ref();
    const check = () => {
      checked.value = !checked.value;
      if (checked.value) {
        ifChecked.value = "#5869ee";
        detail.value.price *= 1.2;
      } else {
        ifChecked.value = "";
        detail.value.price = originPrice.value;
      }
    };
    common_vendor.onLoad(async (options) => {
      var _a;
      if (options.id) {
        await db.collection("consignment").where(`_id=='${options.id}'`).get({ getOne: true }).then((res) => {
          detail.value = res.result.data;
        });
      }
      originPrice.value = (_a = detail.value) == null ? void 0 : _a.price;
    });
    const order = common_vendor.ref(null);
    const openOrder = () => {
      order.value.open();
    };
    const payMode = common_vendor.ref([
      { value: 0, text: "\u94B1\u5305\u4F59\u989D", icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/4073f69a-c176-4a41-a20b-65804227efba.png" },
      { value: 1, text: "\u5FAE\u4FE1", icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/58c510c2-bf12-443f-b2d0-cd6127496ea1.png" },
      { value: 2, text: "\u652F\u4ED8\u5B9D", icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/05e0800e-9908-46c1-a146-2d1151f0bd6b.png" }
    ]);
    const currentMode = common_vendor.ref("\u94B1\u5305\u4F59\u989D");
    const chooseMode = (index) => {
      currentMode.value = payMode.value[index].text;
    };
    const cancelOrder = () => {
      order.value.close();
    };
    const confirmOrder = async () => {
      var _a, _b, _c, _d, _e;
      if (balance.value < detail.value.price) {
        common_vendor.index.showToast({
          title: "\u60A8\u7684\u4F59\u989D\u4E0D\u8DB3",
          icon: "error"
        });
        return;
      }
      db.collection("balance").add({
        money: -detail.value.price
      });
      db.collection("consignment").where(`_id=='${(_a = detail.value) == null ? void 0 : _a._id}'`).update({
        state: 2
      });
      await db.collection("purchase").add({
        consignment_id: (_b = detail.value) == null ? void 0 : _b._id,
        state: 1,
        game: (_c = detail.value) == null ? void 0 : _c.game,
        screenshot: (_d = detail.value) == null ? void 0 : _d.screenshot,
        price: (_e = detail.value) == null ? void 0 : _e.price
      });
      common_vendor.index.switchTab({
        url: "/pages/Mine/index",
        success() {
          common_vendor.index.showToast({
            title: "\u60A8\u5DF2\u7ECF\u6210\u529F\u8D2D\u4E70!"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.p({
          detail: detail.value
        }),
        b: checked.value
      }, checked.value ? {} : {}, {
        c: common_vendor.o(check),
        d: common_vendor.s(_ctx.__cssVars()),
        e: common_vendor.t((_a = detail.value) == null ? void 0 : _a.price.toFixed(2)),
        f: common_vendor.o(openOrder),
        g: common_vendor.s(_ctx.__cssVars()),
        h: common_vendor.o(cancelOrder),
        i: common_vendor.p({
          type: "arrow-left",
          size: "30",
          color: "#5869ee"
        }),
        j: common_vendor.t((_b = detail.value) == null ? void 0 : _b.price.toFixed(2)),
        k: common_vendor.f(payMode.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.icon,
            b: common_vendor.t(item.text),
            c: item.text == "\u94B1\u5305\u4F59\u989D"
          }, item.text == "\u94B1\u5305\u4F59\u989D" ? {
            d: common_vendor.t(common_vendor.unref(balance).toFixed(2))
          } : {}, {
            e: common_vendor.o(($event) => chooseMode(item.value)),
            f: currentMode.value == item.text ? "#5869ee" : "",
            g: item.value
          });
        }),
        l: common_vendor.o(confirmOrder),
        m: common_vendor.p({
          title: "\u7ACB\u5373\u652F\u4ED8"
        }),
        n: common_vendor.sr(order, "91650a62-1", {
          "k": "order"
        }),
        o: common_vendor.s(_ctx.__cssVars()),
        p: common_vendor.p({
          type: "bottom",
          safeArea: false
        })
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-91650a62"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Detail/Buy/index.vue"]]);
wx.createPage(MiniProgramPage);

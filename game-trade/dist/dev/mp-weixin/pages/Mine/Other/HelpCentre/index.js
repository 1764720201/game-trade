"use strict";
var common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(HelpCentre) + common_vendor.unref(Consult))();
}
const HelpCentre = () => "../../../../components/HelpCentre/index.js";
const Consult = () => "../../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const tab = common_vendor.ref([
      {
        value: 0,
        text: "\u5E38\u89C1\u95EE\u9898"
      },
      {
        value: 1,
        text: "\u4E70\u5BB6\u76F8\u5173"
      },
      {
        value: 2,
        text: "\u5356\u5BB6\u76F8\u5173"
      },
      {
        value: 3,
        text: "\u552E\u540E"
      }
    ]);
    const currentTab = common_vendor.ref(0);
    const changeTab = (index) => {
      currentTab.value = index;
    };
    const goConsult = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Message/Consult/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tab.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.text),
            b: item.value == currentTab.value ? "#5869ee" : "#555555",
            c: item.value == currentTab.value
          }, item.value == currentTab.value ? {} : {}, {
            d: item.value,
            e: common_vendor.o(($event) => changeTab(item.value), item.value)
          });
        }),
        b: common_vendor.p({
          tabIndex: currentTab.value
        }),
        c: common_vendor.o(goConsult),
        d: common_vendor.p({
          title: "\u54A8\u8BE2\u5BA2\u670D"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f24d0fb4"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Other/HelpCentre/index.vue"]]);
wx.createPage(MiniProgramPage);

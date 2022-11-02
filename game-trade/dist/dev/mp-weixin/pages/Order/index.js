"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Order)();
}
const Order = () => "../../components/Order/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const tab = common_vendor.ref([
      {
        value: 0,
        text: "\u6211\u8D2D\u4E70\u7684"
      },
      {
        value: 1,
        text: "\u6211\u552E\u51FA\u7684"
      }
    ]);
    const currentTab = common_vendor.ref(0);
    const changeTab = (index) => {
      currentTab.value = index;
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
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-057ff35d"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Order/index.vue"]]);
wx.createPage(MiniProgramPage);

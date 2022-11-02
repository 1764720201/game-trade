"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const categoryList = common_vendor.reactive([]);
    const db = common_vendor.pn.database();
    common_vendor.onLoad(async () => {
      await db.collection("category").get().then((res) => categoryList.push(...res.result.data));
    });
    const goConsignment = (name) => {
      common_vendor.index.navigateTo({
        url: `/pages/Consignment/index?name=${name}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(categoryList, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: item.id,
            d: common_vendor.o(($event) => goConsignment(item.name), item.id)
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4b06a0e"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Sell/index.vue"]]);
wx.createPage(MiniProgramPage);

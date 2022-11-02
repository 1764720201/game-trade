"use strict";
var common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const opinionList = common_vendor.ref([
      {
        value: 0,
        text: "\u4EA7\u54C1\u529F\u80FD\u5EFA\u8BAE"
      },
      {
        value: 1,
        text: "\u670D\u52A1\u6295\u8BC9"
      },
      {
        value: 2,
        text: "\u5176\u5B83"
      }
    ]);
    const goOpinionType = (index) => {
      common_vendor.index.navigateTo({
        url: `/pages/Mine/Other/Opinion/OpinionType/index?type=${index}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(opinionList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: "c06c8a24-0-" + i0,
            c: item.value,
            d: common_vendor.o(($event) => goOpinionType(item.value), item.value)
          };
        }),
        b: common_vendor.p({
          type: "right",
          size: "23",
          color: "#ccc"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c06c8a24"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Other/Opinion/index.vue"]]);
wx.createPage(MiniProgramPage);

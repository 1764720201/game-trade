"use strict";
var common_vendor = require("../../../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(File) + common_vendor.unref(Submit))();
}
const File = () => "../../../../../components/File/index.js";
const Submit = () => "../../../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const describe = common_vendor.ref("");
    const fontNum = common_vendor.ref(0);
    common_vendor.watch(
      () => describe.value,
      () => {
        fontNum.value = describe.value.length;
      }
    );
    return (_ctx, _cache) => {
      return {
        a: describe.value,
        b: common_vendor.o(($event) => describe.value = $event.detail.value),
        c: common_vendor.t(fontNum.value),
        d: common_vendor.p({
          title: "\u4E0A\u4F20\u56FE\u7247(\u9009\u586B)"
        }),
        e: common_vendor.p({
          title: "\u63D0\u4EA4\u53CD\u9988"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b1c4a74a"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Other/Opinion/OpinionType/index.vue"]]);
wx.createPage(MiniProgramPage);

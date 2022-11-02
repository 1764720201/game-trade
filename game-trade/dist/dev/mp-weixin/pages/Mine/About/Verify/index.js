"use strict";
var common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Verify)();
}
const Verify = () => "../../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "b2fc0ef4-wait": wait.value
    }));
    const placeholder = common_vendor.ref("\u8BF7\u8F93\u5165\u5BA2\u670DQQ\u53F7");
    const currentMode = common_vendor.ref("QQ\u9A8C\u8BC1");
    const account = common_vendor.ref();
    const originState = () => {
      wait.value = "#5869ee";
      verifyState.value = "\u7B49\u5F85\u9A8C\u8BC1...";
      account.value = "";
    };
    const modeList = common_vendor.ref([
      { value: 0, text: "QQ\u9A8C\u8BC1" },
      { value: 1, text: "\u5FAE\u4FE1\u9A8C\u8BC1" }
    ]);
    const wait = common_vendor.ref("#5869ee");
    const chooseMode = (index) => {
      currentMode.value = modeList.value[index].text;
      switch (index) {
        case 0:
          placeholder.value = "\u8BF7\u8F93\u5165\u5BA2\u670DQQ\u53F7";
          break;
        case 1:
          placeholder.value = "\u8BF7\u8F93\u5165\u5BA2\u670D\u5FAE\u4FE1\u53F7";
          break;
      }
      originState();
    };
    common_vendor.watch(
      () => account.value,
      (newValue) => {
        if (!newValue) {
          originState();
        }
      }
    );
    const verifyState = common_vendor.ref("\u7B49\u5F85\u9A8C\u8BC1...");
    const verify = () => {
      if (currentMode.value == "QQ\u9A8C\u8BC1") {
        if (account.value == "2050203080") {
          verifyState.value = "\u9A8C\u8BC1\u6210\u529F";
          wait.value = "green";
        } else {
          verifyState.value = "\u9A8C\u8BC1\u5931\u8D25";
          wait.value = "red";
        }
      } else if (currentMode.value == "\u5FAE\u4FE1\u9A8C\u8BC1") {
        if (account.value == "ztw2050203080") {
          verifyState.value = "\u9A8C\u8BC1\u6210\u529F";
          wait.value = "green";
        } else {
          verifyState.value = "\u9A8C\u8BC1\u5931\u8D25";
          wait.value = "red";
        }
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(modeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.o(($event) => chooseMode(item.value), item.value),
            c: item.value,
            d: common_vendor.n(currentMode.value == item.text ? "active" : "")
          };
        }),
        b: placeholder.value,
        c: account.value,
        d: common_vendor.o(($event) => account.value = $event.detail.value),
        e: common_vendor.t(verifyState.value),
        f: common_vendor.o(verify),
        g: common_vendor.p({
          title: "\u7ACB\u5373\u9A8C\u8BC1"
        }),
        h: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b2fc0ef4"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/About/Verify/index.vue"]]);
wx.createPage(MiniProgramPage);

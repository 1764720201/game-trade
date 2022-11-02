"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Item)();
}
const Item = () => "../../../components/Item/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const goTeam = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/Other/Team/index"
      });
    };
    const goCooperation = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/Other/Cooperation/index"
      });
    };
    const goHelpCentre = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/Other/HelpCentre/index"
      });
    };
    const goOpinion = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/Other/Opinion/index"
      });
    };
    const goSet = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/Other/Set/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goTeam),
        b: common_vendor.p({
          name: "\u56E2\u961F\u62DB\u52DF"
        }),
        c: common_vendor.o(goCooperation),
        d: common_vendor.p({
          name: "\u5546\u52A1\u5408\u4F5C"
        }),
        e: common_vendor.o(goHelpCentre),
        f: common_vendor.p({
          name: "\u5E2E\u52A9\u4E2D\u5FC3"
        }),
        g: common_vendor.o(goOpinion),
        h: common_vendor.p({
          name: "\u610F\u89C1\u4E0E\u53CD\u9988",
          tips: "\u63D0\u4EA4\u6295\u8BC9\u3001\u529F\u80FD\u5EFA\u8BAE"
        }),
        i: common_vendor.o(goSet),
        j: common_vendor.p({
          name: "\u8BBE\u7F6E"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2bdb7e5b"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Other/index.vue"]]);
wx.createComponent(Component);

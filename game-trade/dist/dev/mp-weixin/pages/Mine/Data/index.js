"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userInfo } = common_vendor.storeToRefs(store.user);
    common_vendor.onLoad(() => {
      store.user.getUserInfo();
    });
    const goAmend = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Mine/Data/Amend/index"
      });
    };
    return (_ctx, _cache) => {
      var _a;
      return {
        a: (_a = common_vendor.unref(userInfo).avatar_file) == null ? void 0 : _a.url,
        b: common_vendor.t(common_vendor.unref(userInfo).nickname),
        c: common_vendor.o(goAmend),
        d: common_vendor.t(common_vendor.unref(userInfo)._id.toString().slice(0, 6))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2231d815"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/Data/index.vue"]]);
wx.createComponent(Component);

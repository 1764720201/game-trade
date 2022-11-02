"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
var uni_modules_uniIdPages_init = require("./uni_modules/uni-id-pages/init.js");
var store_index = require("./store/index.js");
require("./uni_modules/uni-id-pages/config.js");
require("./store/user.js");
require("./store/LeagueofLegend.js");
require("./store/GenshinImpact.js");
require("./store/GloryOfTheKing.js");
require("./store/detail.js");
if (!Math) {
  "./pages/Home/index.js";
  "./pages/Order/index.js";
  "./pages/Sell/index.js";
  "./pages/Message/index.js";
  "./pages/Mine/index.js";
  "./pages/Consignment/index.js";
  "./pages/Publish/index.js";
  "./pages/Home/Search/SearchDetail/index.js";
  "./pages/Detail/index.js";
  "./pages/Detail/Buy/index.js";
  "./pages/Mine/Data/Amend/index.js";
  "./pages/Mine/About/MyCollect/index.js";
  "./pages/Mine/About/Verify/index.js";
  "./pages/Mine/About/AfterSale/index.js";
  "./pages/Mine/About/MyIssue/index.js";
  "./pages/Mine/About/MyPurcharse/index.js";
  "./pages/Mine/About/MySale/index.js";
  "./pages/Mine/About/MyWallet/index.js";
  "./pages/Mine/About/MyWallet/DealDetail/index.js";
  "./pages/Message/Inform/index.js";
  "./pages/Message/Consult/index.js";
  "./uni_modules/uni-id-pages/pages/login/login-withoutpwd.js";
  "./pages/Mine/Other/Team/index.js";
  "./pages/Mine/Other/Cooperation/index.js";
  "./pages/Mine/Other/HelpCentre/index.js";
  "./pages/Mine/Other/Opinion/index.js";
  "./pages/Mine/Other/Opinion/OpinionType/index.js";
  "./pages/Mine/Other/Set/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    const store = store_index.useStore();
    common_vendor.onLaunch(async () => {
      console.log("App Launch");
      await uni_modules_uniIdPages_init.uniIdPageInit();
      await store.user.getUserInfo();
      await store.user.getBalance();
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/yzc/Desktop/game-trade/src/App.vue"]]);
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(App).use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

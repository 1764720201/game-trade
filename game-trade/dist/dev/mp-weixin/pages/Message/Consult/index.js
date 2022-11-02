"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  _easycom_uni_dateformat2();
}
const _easycom_uni_dateformat = () => "../../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  _easycom_uni_dateformat();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userId, userInfo } = common_vendor.storeToRefs(store.user);
    const content = common_vendor.ref();
    const scrollToView = common_vendor.ref();
    const scrollViewHeight = common_vendor.ref("1250rpx");
    const changeHeight = () => {
      scrollViewHeight.value = "950rpx";
    };
    const consultList = common_vendor.ref([]);
    const getConsult = async () => {
      await db.collection("consult").where(`user_id=='${userId.value}'`).orderBy("create_time", "desc").get().then((res) => {
        consultList.value = res.result.data.reverse();
      });
    };
    common_vendor.onLoad(async () => {
      await getConsult();
      scrollToView.value = "msg" + consultList.value[consultList.value.length - 1]._id;
    });
    const db = common_vendor.pn.database();
    const sendContent = async () => {
      if (!content.value) {
        common_vendor.index.showToast({
          title: "\u804A\u5929\u7684\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A!",
          icon: "none"
        });
      } else {
        await db.collection("consult").add({
          content: content.value
        });
        await getConsult();
        scrollToView.value = "msg" + consultList.value[consultList.value.length - 1]._id;
        common_vendor.index.showToast({
          title: "\u53D1\u9001\u6210\u529F",
          icon: "none"
        });
        content.value = "";
        scrollViewHeight.value = "1250rpx";
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(consultList.value, (item, k0, i0) => {
          return {
            a: "963aad5a-0-" + i0,
            b: common_vendor.p({
              date: item.create_time,
              format: "yyyy-MM-dd hh:mm"
            }),
            c: common_vendor.t(item.content),
            d: item._id,
            e: "msg" + item._id
          };
        }),
        b: common_vendor.unref(userInfo).avatar_file.url,
        c: scrollToView.value,
        d: scrollViewHeight.value,
        e: common_vendor.o(changeHeight),
        f: content.value,
        g: common_vendor.o(($event) => content.value = $event.detail.value),
        h: common_vendor.o(sendContent)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-963aad5a"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Message/Consult/index.vue"]]);
wx.createPage(MiniProgramPage);

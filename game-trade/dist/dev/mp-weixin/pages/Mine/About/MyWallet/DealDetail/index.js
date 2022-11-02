"use strict";
var common_vendor = require("../../../../../common/vendor.js");
var store_index = require("../../../../../store/index.js");
require("../../../../../store/user.js");
require("../../../../../store/LeagueofLegend.js");
require("../../../../../store/GenshinImpact.js");
require("../../../../../store/GloryOfTheKing.js");
require("../../../../../store/detail.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_dateformat2 + _easycom_unicloud_db2)();
}
const _easycom_uni_dateformat = () => "../../../../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_unicloud_db = () => "../../../../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_unicloud_db)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { userId } = common_vendor.storeToRefs(store.user);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data,
          pagination,
          loading,
          error
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : {
            c: common_vendor.f(data, (item, k1, i1) => {
              return common_vendor.e({
                a: item.money >= 0
              }, item.money >= 0 ? {
                b: common_vendor.t(item.money)
              } : {
                c: common_vendor.t(item.money)
              }, {
                d: "293452f0-1-" + i0 + "-" + i1 + ",293452f0-0",
                e: common_vendor.p({
                  date: item.create_time,
                  format: "yyyy-MM-dd hh:mm"
                }),
                f: item._id
              });
            })
          }, {
            d: loading
          }, loading ? {} : {}, {
            e: i0,
            f: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "293452f0-0"
        }),
        b: common_vendor.sr("udb", "293452f0-0"),
        c: common_vendor.p({
          collection: "balance",
          orderby: "create_time desc",
          field: "money,create_time,_id",
          where: `user_id=='${common_vendor.unref(userId)}'`
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-293452f0"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/About/MyWallet/DealDetail/index.vue"]]);
wx.createPage(MiniProgramPage);

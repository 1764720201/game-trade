"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/user.js");
require("../../store/LeagueofLegend.js");
require("../../store/GenshinImpact.js");
require("../../store/GloryOfTheKing.js");
require("../../store/detail.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_dateformat2 + _easycom_unicloud_db2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_unicloud_db)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    tabIndex: { type: Number, required: true }
  },
  setup(__props) {
    const props = __props;
    const store = store_index.useStore();
    const { userId } = common_vendor.storeToRefs(store.user);
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Detail/index?id=${id}`
      });
    };
    const udb = common_vendor.ref(null);
    common_vendor.onReachBottom(() => {
      udb.value.loadMore();
    });
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
              return {
                a: item.screenshot[0].url,
                b: common_vendor.o(($event) => goDetail(__props.tabIndex == 0 ? item.consignment_id : item._id)),
                c: common_vendor.t(item.price.toFixed(2)),
                d: "aec69f5e-1-" + i0 + "-" + i1 + ",aec69f5e-0",
                e: common_vendor.p({
                  date: item.create_time,
                  format: "yyyy-MM-dd hh:mm"
                }),
                f: item._id
              };
            })
          }, {
            d: loading
          }, loading ? {} : {}, {
            e: data.length == 0
          }, data.length == 0 ? {} : {}, {
            f: i0,
            g: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "aec69f5e-0"
        }),
        b: common_vendor.sr(udb, "aec69f5e-0", {
          "k": "udb"
        }),
        c: common_vendor.p({
          collection: props.tabIndex == 0 ? "purchase" : "consignment",
          orderby: "create_time desc",
          field: "create_time,_id, screenshot,consignment_id,price",
          getone: false,
          where: `user_id=='${common_vendor.unref(userId)}'&&state==1`
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aec69f5e"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Order/index.vue"]]);
wx.createComponent(Component);

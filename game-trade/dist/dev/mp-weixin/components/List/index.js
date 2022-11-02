"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_load_more2 + _easycom_unicloud_db2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_load_more + _easycom_unicloud_db)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    where: { type: String, required: true },
    sort: { type: String, required: true },
    game: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
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
          loading,
          error
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : {
            c: common_vendor.f(data, (item, k1, i1) => {
              return common_vendor.e(props.game ? {
                a: item.screenshot[0].url
              } : {}, {
                b: item.materials == "\u63D0\u4F9B"
              }, item.materials == "\u63D0\u4F9B" ? {} : {}, {
                c: common_vendor.t(item.region),
                d: common_vendor.t(item.server),
                e: common_vendor.t(item.price.toFixed(2))
              }, props.game == "\u539F\u795E" ? {
                f: common_vendor.t(item.email),
                g: common_vendor.t(item.technology),
                h: common_vendor.t(item.otherBright ? item.otherBright : "\u65E0")
              } : {}, props.game == "\u82F1\u96C4\u8054\u76DF" ? {
                i: common_vendor.t(item.qualification == "\u6709\u8D44\u683C" ? "\u6709\u5CE1\u8C37\u4E4B\u5DC5\u8D44\u683C" : "\u65E0\u5CE1\u8C37\u4E4B\u5DC5\u8D44\u683C"),
                j: common_vendor.t(item.amount),
                k: common_vendor.t(item.skin),
                l: common_vendor.t(item.dazzling),
                m: common_vendor.t(item.rare ? `\u9F99\u778E\u70AB\u5F69:${item.rare}` : "")
              } : {}, props.game == "\u738B\u8005\u8363\u8000" ? {
                n: common_vendor.t(item.level),
                o: common_vendor.t(item.skin),
                p: common_vendor.t(item.legend ? "\u661F\u4F20\u8BF4:" + item.legend : ""),
                q: common_vendor.t(item.national ? "\u56FD\u6807:" + item.national : "")
              } : {}, {
                r: item._id,
                s: common_vendor.o(($event) => goDetail(item._id), item._id)
              });
            }),
            d: props.game,
            e: props.game == "\u539F\u795E",
            f: props.game == "\u82F1\u96C4\u8054\u76DF",
            g: props.game == "\u738B\u8005\u8363\u8000"
          }, {
            h: loading
          }, loading ? {
            i: "684251d1-1-" + i0 + ",684251d1-0",
            j: common_vendor.p({
              status: "loading"
            })
          } : {}, {
            k: i0,
            l: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "684251d1-0"
        }),
        b: common_vendor.sr(udb, "684251d1-0", {
          "k": "udb"
        }),
        c: common_vendor.p({
          collection: "consignment",
          orderby: __props.sort,
          field: "server,region,price,email,accountInfo,technology,otherBright,_id,materials,amount,qualification,rare,screenshot,skin,grading,dazzling,level,legend,national",
          ["page-size"]: 3,
          getone: false,
          where: props.where
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-684251d1"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/List/index.vue"]]);
wx.createComponent(Component);

"use strict";
var common_vendor = require("../../../../common/vendor.js");
var store_index = require("../../../../store/index.js");
require("../../../../store/user.js");
require("../../../../store/LeagueofLegend.js");
require("../../../../store/GenshinImpact.js");
require("../../../../store/GloryOfTheKing.js");
require("../../../../store/detail.js");
if (!Array) {
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  _easycom_unicloud_db2();
}
const _easycom_unicloud_db = () => "../../../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  _easycom_unicloud_db();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const db = common_vendor.rn.database();
    const collectList = common_vendor.ref([]);
    const getCollectList = async () => {
      const { userId } = common_vendor.storeToRefs(store.user);
      const collect = db.collection("collect").where(`user_id=='${userId.value}'`).getTemp();
      await db.collection(collect, "consignment").get().then((res) => {
        collectList.value = res.result.data;
      });
    };
    common_vendor.onLoad(async () => {
      getCollectList();
    });
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Detail/index?id=${id}`
      });
    };
    const remove = async (id) => {
      await db.collection("collect").where(`_id=='${id}'`).remove().then(() => {
        common_vendor.index.showToast({
          title: "\u53D6\u6D88\u6536\u85CF\u6210\u529F"
        });
      });
      getCollectList();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(collectList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.w(({
              data,
              loading,
              error,
              options
            }, s1, i1) => {
              return common_vendor.e({
                a: error
              }, error ? {
                b: common_vendor.t(error.message)
              } : {
                c: data == null ? void 0 : data.icon
              }, {
                d: i1,
                e: s1
              });
            }, {
              name: "d",
              path: "a[" + i0 + "].a",
              vueId: "45e54a07-0-" + i0
            }),
            b: "45e54a07-0-" + i0,
            c: common_vendor.p({
              collection: "category",
              where: `name=='${item == null ? void 0 : item.consignment_id[0].game}'`,
              getone: true
            }),
            d: common_vendor.t(item == null ? void 0 : item.consignment_id[0].region),
            e: common_vendor.t(item == null ? void 0 : item.consignment_id[0].server),
            f: common_vendor.o(($event) => goDetail(item.consignment_id[0]._id)),
            g: (item == null ? void 0 : item.consignment_id[0].game) == "\u539F\u795E"
          }, (item == null ? void 0 : item.consignment_id[0].game) == "\u539F\u795E" ? {
            h: common_vendor.t(item == null ? void 0 : item.consignment_id[0].email),
            i: common_vendor.t(item == null ? void 0 : item.consignment_id[0].level),
            j: common_vendor.t((item == null ? void 0 : item.consignment_id[0].otherBright) ? item == null ? void 0 : item.consignment_id[0].otherBright : "\u65E0")
          } : {}, {
            k: (item == null ? void 0 : item.consignment_id[0].game) == "\u82F1\u96C4\u8054\u76DF"
          }, (item == null ? void 0 : item.consignment_id[0].game) == "\u82F1\u96C4\u8054\u76DF" ? {
            l: common_vendor.t(item == null ? void 0 : item.consignment_id[0].amount),
            m: common_vendor.t(item == null ? void 0 : item.consignment_id[0].skin),
            n: common_vendor.t(item == null ? void 0 : item.consignment_id[0].dazzling),
            o: common_vendor.t(item == null ? void 0 : item.consignment_id[0].grading)
          } : {}, {
            p: common_vendor.o(($event) => goDetail(item.consignment_id[0]._id)),
            q: common_vendor.t(item == null ? void 0 : item.consignment_id[0]._id.slice(0, 6)),
            r: common_vendor.t(item == null ? void 0 : item.consignment_id[0].price.toFixed(2)),
            s: common_vendor.o(($event) => remove(item._id)),
            t: item._id
          });
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45e54a07"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Mine/About/MyCollect/index.vue"]]);
wx.createPage(MiniProgramPage);

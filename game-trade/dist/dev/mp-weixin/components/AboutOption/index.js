"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_unicloud_db2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_unicloud_db + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    where: { type: String, required: true },
    collection: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Detail/index?id=${id}`
      });
    };
    const content = common_vendor.ref("");
    const udb = common_vendor.ref();
    const soldOut = common_vendor.ref();
    const currentType = common_vendor.ref("");
    const currentId = common_vendor.ref();
    const deleteIssue = (id, type) => {
      currentType.value = type;
      currentId.value = id;
      content.value = "\u4F60\u786E\u5B9A\u8981\u4E0B\u67B6\u5546\u54C1\u5417";
      soldOut.value.open("center");
    };
    const db = common_vendor.rn.database();
    const currentConsignmentId = common_vendor.ref();
    const dialogConfirm = async () => {
      if (currentType.value == "takegood") {
        await db.collection("purchase").where(`_id=='${currentId.value}'`).update({
          state: 2
        }).then(() => {
          db.collection("purchase").where(`_id=='${currentConsignmentId.value}'`).update({
            state: 2
          });
        });
      } else {
        await db.collection("consignment").where(`_id=='${currentId.value}'`).update({
          state: 1
        });
      }
      udb.value.refresh();
    };
    common_vendor.onReachBottom(() => {
      udb.value.loadMore();
    });
    const confirmTakeGoods = (item, type) => {
      currentConsignmentId.value = item.consignment_id;
      currentType.value = type;
      currentId.value = item._id;
      content.value = "\u4F60\u786E\u5B9A\u8981\u786E\u8BA4\u6536\u8D27\u5417";
      soldOut.value.open("center");
    };
    const popup = common_vendor.ref();
    const account = common_vendor.ref("");
    const password = common_vendor.ref("");
    const getAccount = async (id) => {
      await db.collection("consignment").where(`_id=='${id}'`).get().then((res) => {
        account.value = res.result.data[0].account;
        password.value = res.result.data[0].password;
      });
      popup.value.open();
    };
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
              return common_vendor.e({
                a: common_vendor.o(($event) => goDetail(item._id)),
                b: item.screenshot[0].url,
                c: common_vendor.t(item.game),
                d: common_vendor.t(item.price.toFixed(2)),
                e: "eb73a736-1-" + i0 + "-" + i1 + ",eb73a736-0",
                f: common_vendor.p({
                  date: item.create_time,
                  format: "yyyy-MM-dd hh:mm"
                }),
                g: item.state == 0
              }, item.state == 0 ? {
                h: common_vendor.o(($event) => deleteIssue(item._id, "type")),
                i: "eb73a736-2-" + i0 + "-" + i1 + ",eb73a736-0",
                j: common_vendor.p({
                  type: "trash",
                  size: "20"
                })
              } : {}, {
                k: item.state == 1
              }, item.state == 1 ? common_vendor.e({
                l: __props.collection == "consignment"
              }, __props.collection == "consignment" ? {} : {}, {
                m: __props.collection == "purchase"
              }, __props.collection == "purchase" ? {
                n: common_vendor.o(($event) => confirmTakeGoods(item, "takegood"))
              } : {}) : {}, {
                o: item.state == 2
              }, item.state == 2 ? common_vendor.e({
                p: __props.collection == "consignment"
              }, __props.collection == "consignment" ? {} : {}, {
                q: __props.collection == "purchase"
              }, __props.collection == "purchase" ? {
                r: common_vendor.o(($event) => getAccount(item.consignment_id))
              } : {}) : {}, {
                s: item._id
              });
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
          vueId: "eb73a736-0"
        }),
        b: common_vendor.sr(udb, "eb73a736-0", {
          "k": "udb"
        }),
        c: common_vendor.p({
          collection: __props.collection,
          orderby: "create_time desc",
          field: "screenshot,_id,create_time,game,price,state,consignment_id",
          getone: false,
          where: props.where,
          ["page-size"]: 4
        }),
        d: common_vendor.o(dialogConfirm),
        e: common_vendor.p({
          type: "warning",
          cancelText: "\u53D6\u6D88",
          confirmText: "\u786E\u8BA4",
          content: content.value
        }),
        f: common_vendor.sr(soldOut, "eb73a736-3", {
          "k": "soldOut"
        }),
        g: common_vendor.p({
          type: "dialog"
        }),
        h: common_vendor.t(account.value),
        i: common_vendor.t(password.value),
        j: common_vendor.sr(popup, "eb73a736-5", {
          "k": "popup"
        }),
        k: common_vendor.p({
          type: "center"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb73a736"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/AboutOption/index.vue"]]);
wx.createComponent(Component);

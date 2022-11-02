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
    where: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Detail/index?id=${id}`
      });
    };
    const udb = common_vendor.ref(null);
    const soldOut = common_vendor.ref(null);
    const currentId = common_vendor.ref();
    const deleteIssue = (id) => {
      currentId.value = id;
      soldOut.value.open("center");
    };
    const db = common_vendor.pn.database();
    const dialogConfirm = async () => {
      await db.collection("consignment").where(`_id=='${currentId.value}'`).update({
        state: 1
      });
      udb.value.refresh();
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
                e: "8538fa60-1-" + i0 + "-" + i1 + ",8538fa60-0",
                f: common_vendor.p({
                  date: item.create_time,
                  format: "yyyy-MM-dd hh:mm"
                }),
                g: item.state == 0
              }, item.state == 0 ? {
                h: common_vendor.o(($event) => deleteIssue(item._id)),
                i: "8538fa60-2-" + i0 + "-" + i1 + ",8538fa60-0",
                j: common_vendor.p({
                  type: "trash",
                  size: "20"
                })
              } : {}, {
                k: item.state == 1
              }, item.state == 1 ? {} : {}, {
                l: item.state == 2
              }, item.state == 2 ? {} : {}, {
                m: item._id
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
          vueId: "8538fa60-0"
        }),
        b: common_vendor.sr(udb, "8538fa60-0", {
          "k": "udb"
        }),
        c: common_vendor.p({
          collection: "consignment",
          orderby: "create_time desc",
          field: "screenshot,_id,create_time,game,price,state",
          getone: false,
          where: props.where,
          ["page-size"]: 4
        }),
        d: common_vendor.o(dialogConfirm),
        e: common_vendor.p({
          type: "warning",
          cancelText: "\u53D6\u6D88",
          confirmText: "\u786E\u8BA4",
          content: "\u4F60\u786E\u5B9A\u8981\u4E0B\u67B6\u5546\u54C1\u5417"
        }),
        f: common_vendor.sr(soldOut, "8538fa60-3", {
          "k": "soldOut"
        }),
        g: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8538fa60"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/MyIssue/index.vue"]]);
wx.createComponent(Component);

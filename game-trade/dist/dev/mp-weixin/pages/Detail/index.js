"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../store/user.js");
require("../../store/LeagueofLegend.js");
require("../../store/GenshinImpact.js");
require("../../store/GloryOfTheKing.js");
require("../../store/detail.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (common_vendor.unref(Basic) + _easycom_uni_icons + common_vendor.unref(Options))();
}
const Options = () => "../../components/Options/index.js";
const Basic = () => "../../components/Basic/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const option = common_vendor.ref("\u6E38\u620F\u622A\u56FE");
    const changeOption = (text) => {
      option.value = text;
      store.detail.getCurrentOption(option.value);
    };
    const detail = common_vendor.reactive({
      server: "",
      region: "",
      price: 0,
      game: "",
      user_id: "",
      create_time: 0,
      _id: "",
      materials: ""
    });
    const options = common_vendor.reactive([
      {
        value: 0,
        text: "\u6E38\u620F\u622A\u56FE"
      },
      {
        value: 1,
        text: "\u8D26\u53F7\u4FE1\u606F"
      },
      {
        value: 2,
        text: "\u6E38\u620F\u4EA4\u6D41\u7FA4"
      }
    ]);
    const db = common_vendor.rn.database();
    common_vendor.onLoad(async (options2) => {
      detail._id = options2.id;
      await db.collection("consignment").where(`_id=='${options2.id}'`).get({ getOne: true }).then(async (res) => {
        Object.assign(detail, res.result.data);
      });
      verifyCollect();
      store.detail.getDetail(detail);
    });
    const verifyCollect = async () => {
      await db.collection("collect").where(`consignment_id=='${detail._id}'&&user_id=='${userId.value}'`).get({ getOne: true }).then((res) => {
        if (res.result.data) {
          collected.value = true;
        } else {
          collected.value = false;
        }
      }).catch((e) => {
        console.log(e);
      });
    };
    const collected = common_vendor.ref(false);
    const { userId } = common_vendor.storeToRefs(store.user);
    const collect = async () => {
      if (!collected.value) {
        await db.collection("collect").add({
          consignment_id: detail._id
        }).then(async () => {
          await verifyCollect();
          common_vendor.index.showToast({
            title: "\u6536\u85CF\u6210\u529F"
          });
        });
      } else {
        await db.collection("collect").where(
          `consignment_id=='${detail._id}'&&user_id=='${userId.value}'`
        ).remove().then(async () => {
          await verifyCollect();
          common_vendor.index.showToast({
            title: "\u53D6\u6D88\u6536\u85CF",
            icon: "none"
          });
        });
      }
    };
    const goBuy = () => {
      common_vendor.index.navigateTo({
        url: `/pages/Detail/Buy/index?id=${detail._id}`
      });
    };
    const goConsult = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Message/Consult/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          detail
        }),
        b: common_vendor.p({
          type: "right",
          size: "17",
          color: "#ccc"
        }),
        c: common_vendor.p({
          type: "right",
          size: "16",
          color: "#eaa24d"
        }),
        d: common_vendor.f(options, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.s(item.text == option.value ? {
              fontWeight: 900
            } : {
              color: "#ccc"
            }),
            c: item.value,
            d: common_vendor.o(($event) => changeOption(item.text), item.value)
          };
        }),
        e: detail._id,
        f: common_vendor.p({
          option: option.value,
          game: detail.game
        }),
        g: common_vendor.p({
          type: collected.value ? "star-filled" : "star",
          size: "27"
        }),
        h: common_vendor.o(collect),
        i: common_vendor.o(goConsult),
        j: common_vendor.o(goBuy)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fcd0e390"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Detail/index.vue"]]);
wx.createPage(MiniProgramPage);

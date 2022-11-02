"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  _easycom_uni_data_select2();
}
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (common_vendor.unref(Check) + common_vendor.unref(File) + common_vendor.unref(InputBox) + _easycom_uni_data_select + common_vendor.unref(Price) + common_vendor.unref(Next))();
}
const Check = () => "../../../components/Check/index.js";
const File = () => "../../../components/File/index.js";
const InputBox = () => "../../../components/InputBox/index.js";
const Price = () => "../../../components/Price/index.js";
const Next = () => "../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const regionIndex = common_vendor.ref();
    const serverIndex = common_vendor.ref();
    const screenshot = common_vendor.ref([]);
    const amount = common_vendor.ref();
    const qualificationIndex = common_vendor.ref(-1);
    const rareIndex = common_vendor.ref(-1);
    const price = common_vendor.ref(0);
    const gradingIndex = common_vendor.ref(0);
    const skin = common_vendor.ref();
    const dazzling = common_vendor.ref();
    const { allServer, region, qualification, rare, grading } = common_vendor.storeToRefs(
      store.LeagueofLegend
    );
    const consignment = common_vendor.reactive({
      game: "\u82F1\u96C4\u8054\u76DF",
      region: "",
      server: "",
      amount: 0,
      qualification: "",
      screenshot: [],
      rare: "",
      price: 0,
      dazzling: "",
      skin: "",
      grading: ""
    });
    const server = common_vendor.ref(allServer.value[0]);
    const getRegionIndex = (value) => {
      regionIndex.value = value;
      switch (value) {
        case 0:
          server.value = allServer.value[0];
          break;
        case 1:
          server.value = allServer.value[1];
          break;
        case 2:
          server.value = allServer.value[2];
          break;
      }
    };
    const getServerIndex = (value) => {
      serverIndex.value = value;
    };
    const getScreenshot = (value) => {
      screenshot.value = value;
    };
    const getAmount = (value) => {
      amount.value = value;
    };
    const getQualificationIndex = (value) => {
      qualificationIndex.value = value;
    };
    const getRareIndex = (value) => {
      rareIndex.value = value;
    };
    const getPrice = (value) => {
      price.value = value;
    };
    const changeGrading = (e) => {
      gradingIndex.value = e;
    };
    const getSkin = (value) => {
      skin.value = value;
    };
    const getDazzling = (value) => {
      dazzling.value = value;
    };
    const next = common_vendor.ref(true);
    const verifyCheck = (value, range, title, index) => {
      if (next.value) {
        if (index >= 0) {
          consignment[value] = range[index].text;
          next.value = true;
        } else {
          common_vendor.index.showToast({
            title,
            icon: "none"
          });
          next.value = false;
        }
      }
    };
    const verifyInput = (value, title, content) => {
      if (next.value) {
        if (content) {
          consignment[value] = content;
          next.value = true;
        } else {
          common_vendor.index.showToast({
            title,
            icon: "none"
          });
          next.value = false;
        }
      }
    };
    const verifyFile = (value, title, image) => {
      var _a;
      if (next.value) {
        if ((_a = image[0]) == null ? void 0 : _a.url) {
          consignment[value] = image;
          next.value = true;
        } else {
          common_vendor.index.showToast({
            title,
            icon: "none"
          });
          next.value = false;
        }
      }
    };
    const verifySelect = (value, title, select) => {
      if (next.value) {
        if (select) {
          consignment[value] = select;
          next.value = true;
        } else {
          common_vendor.index.showToast({
            title,
            icon: "none"
          });
          next.value = false;
        }
      }
    };
    const goPublish = () => {
      var _a, _b, _c;
      next.value = true;
      verifyCheck("region", region.value, "\u8BF7\u9009\u62E9\u5927\u533A", regionIndex.value);
      verifyCheck("server", server.value, "\u8BF7\u9009\u62E9\u670D\u52A1\u5668", serverIndex.value);
      verifyFile("screenshot", "\u8BF7\u4E0A\u4F20\u6E38\u620F\u622A\u56FE", screenshot.value);
      verifyInput("skin", "\u8BF7\u8F93\u5165\u76AE\u80A4\u6570", skin.value);
      verifyInput("dazzling", "\u8BF7\u8F93\u5165\u70AB\u5F69\u6570", dazzling.value);
      verifyInput("amount", "\u8BF7\u8F93\u5165\u82F1\u96C4\u6570", amount.value);
      verifySelect("grading", "\u8BF7\u9009\u62E9\u5355\u53CC\u6392\u6BB5\u4F4D", (_a = grading.value[gradingIndex.value]) == null ? void 0 : _a.text);
      verifyInput("price", "\u8BF7\u8F93\u5165\u4EF7\u683C", price.value);
      consignment.qualification = (_b = qualification.value[qualificationIndex.value]) == null ? void 0 : _b.text;
      consignment.rare = (_c = rare.value[rareIndex.value]) == null ? void 0 : _c.text;
      if (next.value) {
        common_vendor.index.navigateTo({
          url: `/pages/Publish/index?consignment=${JSON.stringify(consignment)}`
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getRegionIndex),
        b: common_vendor.p({
          title: "\u5927\u533A",
          range: common_vendor.unref(region)
        }),
        c: common_vendor.o(getServerIndex),
        d: common_vendor.p({
          title: "\u670D\u52A1\u5668",
          range: server.value
        }),
        e: common_vendor.o(getScreenshot),
        f: common_vendor.p({
          title: "\u6E38\u620F\u622A\u56FE"
        }),
        g: common_vendor.o(getSkin),
        h: common_vendor.p({
          title: "\u76AE\u80A4\u6570",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u76AE\u80A4\u6570",
          type: "number"
        }),
        i: common_vendor.o(getDazzling),
        j: common_vendor.p({
          title: "\u70AB\u5F69\u6570",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u70AB\u5F69\u6570",
          type: "number"
        }),
        k: common_vendor.o(getAmount),
        l: common_vendor.p({
          title: "\u82F1\u96C4\u6570",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u82F1\u96C4\u6570",
          type: "number"
        }),
        m: common_vendor.o(changeGrading),
        n: common_vendor.o(($event) => gradingIndex.value = $event),
        o: common_vendor.p({
          localdata: common_vendor.unref(grading),
          clear: true,
          placeholder: "\u8BF7\u9009\u62E9\u5355\u53CC\u6392\u6BB5\u4F4D",
          modelValue: gradingIndex.value
        }),
        p: common_vendor.o(getQualificationIndex),
        q: common_vendor.p({
          title: "\u5CE1\u8C37\u4E4B\u5DC5\u8D44\u683C(\u9009\u586B)",
          range: common_vendor.unref(qualification)
        }),
        r: common_vendor.o(getRareIndex),
        s: common_vendor.p({
          title: "\u9F99\u778E\u70AB\u5F69(\u9009\u586B)",
          range: common_vendor.unref(rare)
        }),
        t: common_vendor.o(getPrice),
        v: common_vendor.p({
          title: "\u552E\u4EF7",
          position: "left",
          tips: "\u8BF7\u586B\u5199\u91D1\u989D",
          type: "number"
        }),
        w: common_vendor.p({
          price: Number(price.value)
        }),
        x: common_vendor.o(goPublish),
        y: common_vendor.p({
          title: "\u4E0B\u4E00\u6B65",
          ifShowNext: true
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12da8f2c"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Consignment/LeagueofLegend/index.vue"]]);
wx.createComponent(Component);

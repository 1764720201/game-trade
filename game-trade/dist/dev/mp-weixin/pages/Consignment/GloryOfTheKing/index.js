"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
if (!Math) {
  (common_vendor.unref(Check) + common_vendor.unref(InputBox) + common_vendor.unref(File) + common_vendor.unref(Price) + common_vendor.unref(Next))();
}
const Check = () => "../../../components/Check/index.js";
const InputBox = () => "../../../components/InputBox/index.js";
const File = () => "../../../components/File/index.js";
const Price = () => "../../../components/Price/index.js";
const Next = () => "../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { region, legend, level, forestall } = common_vendor.storeToRefs(store.GloryOfTheKing);
    const consignment = common_vendor.reactive({
      game: "\u738B\u8005\u8363\u8000",
      price: 0,
      region: "",
      national: "",
      homepage: [],
      campsite: "",
      screenshot: [],
      level: ""
    });
    const regionIndex = common_vendor.ref();
    const getRegionIndex = (value) => {
      regionIndex.value = value;
    };
    const campsite = common_vendor.ref();
    const getCampsite = (value) => {
      campsite.value = value;
    };
    const forestallIndex = common_vendor.ref();
    const getForestallIndex = (value) => {
      forestallIndex.value = value;
    };
    const levelIndex = common_vendor.ref(0);
    const getLevelIndex = (value) => {
      levelIndex.value = value;
    };
    const screenshot = common_vendor.ref([]);
    const getScreenshot = (value) => {
      screenshot.value = value;
    };
    const homepage = common_vendor.ref([]);
    const getHomepage = (value) => {
      homepage.value = value;
    };
    const national = common_vendor.ref("");
    const getNational = (value) => {
      national.value = value;
    };
    const legendIndex = common_vendor.ref(0);
    const getLegendIndex = (value) => {
      legendIndex.value = value;
    };
    const price = common_vendor.ref(0);
    const getPrice = (value) => {
      price.value = value;
    };
    const skin = common_vendor.ref();
    const getSkin = (value) => {
      skin.value = value;
    };
    const next = common_vendor.ref(true);
    const verifyCheck = (value, range, title, index) => {
      var _a;
      if (next.value) {
        if (index >= 0) {
          consignment[value] = (_a = range[index]) == null ? void 0 : _a.text;
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
    const goPublish = () => {
      var _a;
      next.value = true;
      verifyCheck("region", region.value, "\u8BF7\u9009\u62E9\u5927\u533A", regionIndex.value);
      verifyInput("campsite", "\u8BF7\u8F93\u5165\u738B\u8005\u8425\u5730ID", campsite.value);
      verifyInput("skin", "\u8BF7\u8F93\u5165\u76AE\u80A4\u6570", skin.value);
      verifyCheck("forestall", forestall.value, "\u8BF7\u9009\u62E9\u662F\u5426\u4E3A\u62A2\u5148\u670D", forestallIndex.value);
      verifyCheck("level", level.value, "\u8BF7\u9009\u62E9\u8D35\u65CF\u7B49\u7EA7", levelIndex.value);
      verifyFile("screenshot", "\u8BF7\u4E0A\u4F20\u6E38\u620F\u622A\u56FE", screenshot.value);
      verifyFile("homepage", "\u8BF7\u4E0A\u4F20\u4E2A\u4EBA\u4E3B\u9875\u622A\u56FE", homepage.value);
      verifyInput("price", "\u8BF7\u8F93\u5165\u4EF7\u683C", price.value);
      consignment.national = national.value;
      consignment.legend = (_a = legend.value[legendIndex.value]) == null ? void 0 : _a.text;
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
        c: common_vendor.o(getCampsite),
        d: common_vendor.p({
          title: "\u738B\u8005\u8425\u5730ID",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u738B\u8005\u8425\u5730ID",
          type: "text"
        }),
        e: common_vendor.o(getSkin),
        f: common_vendor.p({
          title: "\u76AE\u80A4\u6570",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u76AE\u80A4\u6570",
          type: "number"
        }),
        g: common_vendor.o(getForestallIndex),
        h: common_vendor.p({
          title: "\u662F\u5426\u62A2\u5148\u670D",
          range: common_vendor.unref(forestall)
        }),
        i: common_vendor.o(getLevelIndex),
        j: common_vendor.p({
          title: "\u8D35\u65CF\u7B49\u7EA7",
          range: common_vendor.unref(level)
        }),
        k: common_vendor.o(getScreenshot),
        l: common_vendor.p({
          title: "\u6E38\u620F\u622A\u56FE"
        }),
        m: common_vendor.o(getHomepage),
        n: common_vendor.p({
          title: "\u6E38\u620F\u4E2A\u4EBA\u4E3B\u9875\u622A\u56FE"
        }),
        o: common_vendor.o(getNational),
        p: common_vendor.p({
          title: "\u56FD\u6807(\u9009\u586B)",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u56FD\u6807",
          type: "text"
        }),
        q: common_vendor.o(getLegendIndex),
        r: common_vendor.p({
          title: "\u661F\u4F20\u8BF4(\u9009\u586B)",
          range: common_vendor.unref(legend)
        }),
        s: common_vendor.o(getPrice),
        t: common_vendor.p({
          title: "\u552E\u4EF7",
          position: "left",
          tips: "\u8BF7\u586B\u5199\u91D1\u989D",
          type: "number"
        }),
        v: common_vendor.p({
          price: Number(price.value)
        }),
        w: common_vendor.o(goPublish),
        x: common_vendor.p({
          title: "\u4E0B\u4E00\u6B65",
          ifShowNext: true
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Consignment/GloryOfTheKing/index.vue"]]);
wx.createComponent(Component);

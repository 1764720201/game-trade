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
const File = () => "../../../components/File/index.js";
const InputBox = () => "../../../components/InputBox/index.js";
const Price = () => "../../../components/Price/index.js";
const Next = () => "../../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store = store_index.useStore();
    const { region, allServer, email, technology, autonym } = common_vendor.storeToRefs(store.GenshinImpact);
    const regionIndex = common_vendor.ref();
    const serverIndex = common_vendor.ref();
    const emailIndex = common_vendor.ref();
    const level = common_vendor.ref();
    const technologyIndex = common_vendor.ref();
    const autonymIndex = common_vendor.ref();
    const otherBright = common_vendor.ref("");
    const price = common_vendor.ref();
    const accountInfo = common_vendor.ref([]);
    const screenshot = common_vendor.ref([]);
    const emailImage = common_vendor.ref([]);
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
      }
    };
    const getServerIndex = (value) => {
      serverIndex.value = value;
    };
    const getEmailIndex = (value) => {
      emailIndex.value = value;
    };
    const getTechnologyIndex = (value) => {
      technologyIndex.value = value;
    };
    const getAutonymIndex = (value) => {
      autonymIndex.value = value;
    };
    const getAccountInfo = (value) => {
      accountInfo.value = value;
    };
    const getScreenshot = (value) => {
      screenshot.value = value;
    };
    const getEmailImage = (value) => {
      emailImage.value = value;
    };
    const getOtherBright = (value) => {
      otherBright.value = value;
    };
    const getPrice = (value) => {
      price.value = value;
    };
    const getLevel = (value) => {
      level.value = value;
    };
    const consignment = common_vendor.reactive({
      game: "\u539F\u795E",
      region: "",
      server: "",
      email: "",
      accountInfo: [],
      screenshot: [],
      emailImage: [],
      technology: "",
      otherBright: "",
      autonym: "",
      price: 0,
      level: ""
    });
    const next = common_vendor.ref(true);
    const verifyFn = () => {
      verifyCheck("region", region.value, "\u8BF7\u9009\u62E9\u5927\u533A", regionIndex.value);
      verifyCheck("server", server.value, "\u8BF7\u9009\u62E9\u670D\u52A1\u5668", serverIndex.value);
      verifyCheck("email", email.value, "\u8BF7\u9009\u62E9\u90AE\u7BB1", emailIndex.value);
      verifyInput("level", "\u8BF7\u586B\u5199\u5192\u9669\u7B49\u7EA7", level.value);
      verifyFile("accountInfo", "\u8BF7\u4E0A\u4F20\u8D26\u53F7\u4FE1\u606F", accountInfo.value);
      verifyFile("screenshot", "\u8BF7\u4E0A\u4F20\u6362\u7ED1\u60C5\u51B5", screenshot.value);
      verifyFile("emailImage", "\u8BF7\u4E0A\u4F20\u90AE\u7BB1\u622A\u56FE", emailImage.value);
      verifyCheck("technology", technology.value, "\u8BF7\u9009\u62E9\u662F\u5426\u4E3A\u79D1\u6280\u53F7", technologyIndex.value);
      verifyCheck("autonym", autonym.value, "\u8BF7\u9009\u62E9\u662F\u5426\u80FD\u63D0\u4F9B\u5B9E\u540D\u4FE1\u606F", autonymIndex.value);
      verifyInput("price", "\u8BF7\u586B\u5199\u4EF7\u683C", price.value);
    };
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
    const goPublish = () => {
      next.value = true;
      verifyFn();
      consignment.otherBright = otherBright.value;
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
          range: common_vendor.unref(region),
          title: "\u5927\u533A"
        }),
        c: common_vendor.o(getServerIndex),
        d: common_vendor.p({
          range: server.value,
          title: "\u670D\u52A1\u5668"
        }),
        e: common_vendor.o(getEmailIndex),
        f: common_vendor.p({
          range: common_vendor.unref(email),
          title: "\u90AE\u7BB1"
        }),
        g: common_vendor.o(getLevel),
        h: common_vendor.p({
          title: "\u5192\u9669\u7B49\u7EA7",
          position: "left",
          tips: "\u8BF7\u586B\u5199\u5192\u9669\u7B49\u7EA7",
          type: "number"
        }),
        i: common_vendor.o(getAccountInfo),
        j: common_vendor.p({
          title: "\u8D26\u53F7\u4FE1\u606F"
        }),
        k: common_vendor.o(getScreenshot),
        l: common_vendor.p({
          title: "\u6E38\u620F\u622A\u56FE"
        }),
        m: common_vendor.o(getEmailImage),
        n: common_vendor.p({
          title: "\u6362\u7ED1\u90AE\u7BB1\u622A\u56FE(\u4EC5\u7F51\u6613\u90AE\u7BB1)"
        }),
        o: common_vendor.o(getTechnologyIndex),
        p: common_vendor.p({
          range: common_vendor.unref(technology),
          title: "\u662F\u5426\u79D1\u6280\u53F7"
        }),
        q: common_vendor.o(getAutonymIndex),
        r: common_vendor.p({
          range: common_vendor.unref(autonym),
          title: "\u662F\u5426\u80FD\u63D0\u4F9B\u6E38\u620F\u5B9E\u540D\u7684\u8EAB\u4EFD\u4FE1\u606F"
        }),
        s: common_vendor.o(getOtherBright),
        t: common_vendor.p({
          title: "\u5176\u5B83\u4EAE\u70B9(\u9009\u586B)",
          position: "top",
          tips: "\u8BF7\u586B\u5199\u5176\u5B83\u4EAE\u70B9",
          type: "text"
        }),
        v: common_vendor.o(getPrice),
        w: common_vendor.p({
          title: "\u552E\u4EF7",
          position: "left",
          tips: "\u8BF7\u586B\u5199\u91D1\u989D",
          type: "number"
        }),
        x: common_vendor.p({
          price: Number(price.value)
        }),
        y: common_vendor.o(goPublish),
        z: common_vendor.p({
          ifShowNext: true,
          title: "\u4E0B\u4E00\u6B65"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Consignment/GenshinImpact/index.vue"]]);
wx.createComponent(Component);

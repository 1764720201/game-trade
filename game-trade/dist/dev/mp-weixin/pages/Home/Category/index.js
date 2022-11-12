"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../store/user.js");
require("../../../store/LeagueofLegend.js");
require("../../../store/GenshinImpact.js");
require("../../../store/GloryOfTheKing.js");
require("../../../store/detail.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup + common_vendor.unref(List))();
}
const List = () => "../../../components/List/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const priceList = common_vendor.ref([
      { value: 0, text: "500\u4EE5\u4E0B" },
      { value: 1, text: "500-1000" },
      { value: 2, text: "1000-3000" },
      { value: 3, text: "3000-10000" },
      { value: 4, text: "10000-30000" },
      { value: 5, text: "30000\u4EE5\u4E0A" }
    ]);
    const compensateList = common_vendor.ref([
      { value: 0, text: "\u652F\u6301" },
      { value: 1, text: "\u4E0D\u652F\u6301" }
    ]);
    const area = common_vendor.ref(null);
    const chooseArea = () => {
      area.value.open();
    };
    const store = store_index.useStore();
    const { email } = common_vendor.storeToRefs(store.GenshinImpact);
    const { grading } = common_vendor.storeToRefs(store.LeagueofLegend);
    const currentName = common_vendor.ref("\u539F\u795E");
    const where = common_vendor.ref(`game=='${currentName.value}'&&state==0`);
    const server = common_vendor.ref([]);
    const region = common_vendor.ref([]);
    const currentRegion = common_vendor.ref("");
    const chooseRegion = (item) => {
      var _a;
      currentRegion.value = item.text;
      const storeName = common_vendor.ref("");
      switch (currentName.value) {
        case "\u539F\u795E":
          storeName.value = "GenshinImpact";
          break;
        case "\u82F1\u96C4\u8054\u76DF":
          storeName.value = "LeagueofLegend";
          break;
        case "\u738B\u8005\u8363\u8000":
          storeName.value = "GloryOfTheKing";
          break;
      }
      const st = common_vendor.storeToRefs(store[storeName.value]);
      const allServer = common_vendor.ref([]);
      st.allServer.value.forEach((value) => {
        allServer.value.push(...value);
      });
      if (item.text != "\u5168\u90E8") {
        server.value = (_a = st.allServer) == null ? void 0 : _a.value[item.value];
      } else {
        server.value = allServer.value;
      }
    };
    const currentServer = common_vendor.ref("");
    const chooseServer = (name) => {
      currentServer.value = name;
    };
    const getArea = (storeName) => {
      var _a;
      server.value.length = 0;
      const st = common_vendor.storeToRefs(store[storeName]);
      (_a = st.allServer) == null ? void 0 : _a.value.forEach((value) => {
        server.value.push(...value);
      });
      region.value = st.region.value.slice(0);
      if (region.value.findIndex((value) => value.text == "\u5168\u90E8") != 0) {
        region.value.unshift({ value: 999, text: "\u5168\u90E8" });
      }
    };
    const getDefaultArea = () => {
      currentRegion.value = region.value[0].text;
    };
    const change = (game) => {
      currentName.value = game;
      where.value = `game=='${currentName.value}'&&state==0`;
      switch (game) {
        case "\u539F\u795E":
          getArea("GenshinImpact");
          break;
        case "\u82F1\u96C4\u8054\u76DF":
          getArea("LeagueofLegend");
          break;
        case "\u738B\u8005\u8363\u8000":
          getArea("GloryOfTheKing");
          break;
      }
      getDefaultArea();
    };
    const reset = (type) => {
      if (type == "area") {
        currentRegion.value = "\u5168\u90E8";
        currentServer.value = "";
      }
      if (type == "screen") {
        currentCompensate.value = "";
        currentEmail.value = "";
        currentGrading.value = "";
      }
    };
    const confirm = (type) => {
      const condition = common_vendor.ref([]);
      condition.value.push(`game=='${currentName.value}'`);
      condition.value.push("state==0");
      if (type == "area") {
        if (currentRegion.value != "\u5168\u90E8") {
          condition.value.push(`region=='${currentRegion.value}'`);
        }
        if (currentServer.value) {
          condition.value.push(`server=='${currentServer.value}'`);
        }
        area.value.close();
      }
      if (type == "screen") {
        if (currentCompensate.value == "\u652F\u6301") {
          condition.value.push("materials=='\u63D0\u4F9B'");
        }
        if (currentCompensate.value == "\u4E0D\u652F\u6301") {
          condition.value.push("materials=='\u4E0D\u63D0\u4F9B'");
        }
        if (currentEmail.value) {
          condition.value.push(`email=='${currentEmail.value}'`);
        }
        if (currentGrading.value) {
          condition.value.push(`grading=='${currentGrading.value}'`);
        }
        if (currentPrice.value) {
          condition.value.push(priceItem.value);
        }
        screen.value.close();
      }
      where.value = condition.value.join("&&");
    };
    const categoryList = common_vendor.reactive([]);
    const allCategoryList = common_vendor.reactive([]);
    const db = common_vendor.rn.database();
    common_vendor.onLoad(async () => {
      await db.collection("category").orderBy("order", "asc").get().then((res) => {
        categoryList.push(...res.result.data.slice(0, 4));
        allCategoryList.push(...res.result.data);
      });
      getArea("GenshinImpact");
      getDefaultArea();
    });
    const popup = common_vendor.ref(null);
    const getMore = () => {
      popup.value.open("bottom");
    };
    const cancel = () => {
      popup.value.close();
    };
    const changeMore = (item) => {
      if (categoryList[0].name == item.name)
        return;
      currentName.value = item.name;
      categoryList.forEach((value, index) => {
        if (value.name == item.name) {
          categoryList.splice(index, 1);
          categoryList.unshift(item);
        }
      });
      const exist = categoryList.map((value) => {
        return value.name == item.name;
      });
      if (exist.indexOf(true) == -1) {
        categoryList.pop();
        categoryList.unshift(item);
      }
      change(item.name);
      popup.value.close();
    };
    const orderOptions = common_vendor.ref([
      { value: 0, text: "\u9ED8\u8BA4\u6392\u5E8F" },
      { value: 1, text: "\u6700\u65B0\u53D1\u5E03" },
      { value: 2, text: "\u4EF7\u683C\u6700\u4F4E" },
      { value: 3, text: "\u4EF7\u683C\u6700\u9AD8" }
    ]);
    const order = common_vendor.ref(null);
    const openOrder = () => {
      order.value.open();
    };
    const sort = common_vendor.ref("create_time desc");
    const chooseOrder = (index) => {
      switch (index) {
        case 0:
          sort.value = "create_time desc";
          break;
        case 1:
          sort.value = "create_time desc";
          break;
        case 2:
          sort.value = "price asc";
          break;
        case 3:
          sort.value = "price desc";
          break;
      }
      order.value.close();
    };
    const screen = common_vendor.ref(null);
    const openScreen = () => {
      screen.value.open();
    };
    const currentCompensate = common_vendor.ref("");
    const chooseCompensate = (value) => {
      currentCompensate.value = value;
    };
    const currentEmail = common_vendor.ref("");
    const chooseEmail = (value) => {
      currentEmail.value = value;
    };
    const currentGrading = common_vendor.ref("");
    const chooseGrading = (value) => {
      currentGrading.value = value;
    };
    const currentPrice = common_vendor.ref("");
    const priceItem = common_vendor.ref("");
    const choosePrice = (index) => {
      currentPrice.value = priceList.value[index].text;
      switch (index) {
        case 0:
          priceItem.value = "price<500";
          break;
        case 1:
          priceItem.value = "price>=500&&price<1000";
          break;
        case 2:
          priceItem.value = "price>=1000&&price<3000";
          break;
        case 3:
          priceItem.value = "price>=3000&&price<10000";
          break;
        case 4:
          priceItem.value = "price>=10000&&price<30000";
          break;
        case 5:
          priceItem.value = "price>30000";
          break;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(categoryList, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: common_vendor.s(currentName.value == item.name ? {
              fontWeight: 900
            } : {
              color: "#a9a9a9"
            }),
            d: item.id,
            e: common_vendor.o(($event) => change(item.name), item.id)
          };
        }),
        b: common_vendor.o(getMore),
        c: common_vendor.o(cancel),
        d: common_vendor.p({
          type: "arrow-left",
          size: "30",
          color: "#1296db"
        }),
        e: common_vendor.f(allCategoryList, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: item.id,
            d: common_vendor.o(($event) => changeMore(item), item.id)
          };
        }),
        f: common_vendor.sr(popup, "14aa105d-0", {
          "k": "popup"
        }),
        g: common_vendor.p({
          type: "bottom",
          safeArea: false
        }),
        h: common_vendor.p({
          type: "bottom",
          size: "15",
          color: "#ccc"
        }),
        i: common_vendor.o(chooseArea),
        j: common_vendor.p({
          type: "bottom",
          size: "15",
          color: "#ccc"
        }),
        k: common_vendor.o(openOrder),
        l: common_vendor.p({
          type: "bars",
          size: "15",
          color: "#ccc"
        }),
        m: common_vendor.o(openScreen),
        n: common_vendor.p({
          game: currentName.value,
          where: where.value,
          sort: sort.value
        }),
        o: common_vendor.f(region.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.n(currentRegion.value == item.text ? "active" : ""),
            d: common_vendor.o(($event) => chooseRegion(item), item.value)
          };
        }),
        p: common_vendor.f(server.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.text,
            c: common_vendor.n(currentServer.value == item.text ? "active" : ""),
            d: common_vendor.o(($event) => chooseServer(item.text), item.text)
          };
        }),
        q: common_vendor.o(($event) => reset("area")),
        r: common_vendor.o(($event) => confirm("area")),
        s: common_vendor.sr(area, "14aa105d-6", {
          "k": "area"
        }),
        t: common_vendor.p({
          type: "right"
        }),
        v: common_vendor.f(orderOptions.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.o(($event) => chooseOrder(item.value), item.value)
          };
        }),
        w: common_vendor.sr(order, "14aa105d-7", {
          "k": "order"
        }),
        x: common_vendor.p({
          type: "bottom",
          safeArea: false
        }),
        y: common_vendor.f(priceList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.o(($event) => choosePrice(item.value), item.value),
            d: common_vendor.n(currentPrice.value == item.text ? "active" : "")
          };
        }),
        z: common_vendor.f(compensateList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.o(($event) => chooseCompensate(item.text), item.value),
            d: common_vendor.n(currentCompensate.value == item.text ? "active" : "")
          };
        }),
        A: currentName.value == "\u82F1\u96C4\u8054\u76DF"
      }, currentName.value == "\u82F1\u96C4\u8054\u76DF" ? {
        B: common_vendor.f(common_vendor.unref(grading), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.o(($event) => chooseGrading(item.text), item.value),
            d: common_vendor.n(currentGrading.value == item.text ? "active" : "")
          };
        })
      } : {}, {
        C: currentName.value == "\u539F\u795E"
      }, currentName.value == "\u539F\u795E" ? {
        D: common_vendor.f(common_vendor.unref(email), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.value,
            c: common_vendor.n(currentEmail.value == item.text ? "active" : ""),
            d: common_vendor.o(($event) => chooseEmail(item.text), item.value)
          };
        })
      } : {}, {
        E: common_vendor.o(($event) => reset("screen")),
        F: common_vendor.o(($event) => confirm("screen")),
        G: common_vendor.sr(screen, "14aa105d-8", {
          "k": "screen"
        }),
        H: common_vendor.p({
          type: "right"
        })
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14aa105d"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Home/Category/index.vue"]]);
wx.createComponent(Component);

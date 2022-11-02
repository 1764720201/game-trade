"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const sliderList = common_vendor.reactive([
      {
        id: 0,
        src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/723bd5ce-6560-42d0-8dac-cff2409c2ac7.jpeg"
      },
      {
        id: 1,
        src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/0204cdc5-04b8-44f4-a8b1-546fc3eca367.jpeg"
      },
      {
        id: 2,
        src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/de7e497b-6eb5-4070-90dd-04897e9de812.jpeg"
      },
      {
        id: 3,
        src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bbcb161c-b876-49e7-9693-67e4dd086408/b8cefa5d-de34-4115-bf95-26307ce901a3.jpeg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(sliderList, (item, k0, i0) => {
          return {
            a: item.src,
            b: item.id
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62d26048"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Home/Slide/index.vue"]]);
wx.createComponent(Component);

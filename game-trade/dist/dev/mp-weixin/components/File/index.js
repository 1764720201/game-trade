"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_icons2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_file_picker)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true }
  },
  emits: ["file"],
  setup(__props, { emit }) {
    const props = __props;
    const imageList = common_vendor.ref([]);
    const imageStyles = common_vendor.reactive({
      width: 80,
      height: 80,
      border: {
        radius: "10"
      }
    });
    const select = () => {
      setTimeout(() => {
        emit("file", imageList.value);
      }, 200);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.title),
        b: common_vendor.p({
          type: "plusempty",
          size: "30",
          color: "#ccc"
        }),
        c: common_vendor.o(select),
        d: common_vendor.o(select),
        e: common_vendor.o(($event) => imageList.value = $event),
        f: common_vendor.p({
          fileMediatype: "image",
          ["image-styles"]: imageStyles,
          modelValue: imageList.value
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dcd992f"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/File/index.vue"]]);
wx.createComponent(Component);

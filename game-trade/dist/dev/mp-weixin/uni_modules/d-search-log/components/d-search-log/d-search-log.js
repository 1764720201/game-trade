"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      search_list_old: [],
      search_input: "",
      is_hot_show: true
    };
  },
  created() {
    this._init_search();
  },
  props: {
    is_show_more: {
      value: Boolean,
      default: true
    },
    search_list_old_man_num: {
      value: Number,
      default: 10
    },
    search_list_hot: {
      value: Array,
      default: []
    },
    placeholder: {
      value: String,
      default: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
    },
    store_key: {
      value: String,
      default: "search_list"
    },
    color_border: {
      value: String,
      default: ""
    },
    color_text: {
      value: String,
      default: "#30c66c"
    },
    search_name: {
      value: String,
      default: "\u641C\u7D22"
    },
    input_text: {
      value: String,
      default: ""
    }
  },
  watch: {
    search_list_hot(newVal) {
      if (newVal) {
        this.search_list_hot = newVal;
      }
    },
    input_text(newVal) {
      if (newVal) {
        this.search_input = newVal;
        this.saveKeyword();
      }
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    onClickInput() {
      this.saveKeyword();
    },
    onClickInputValue(search_input) {
      if (!search_input) {
        return false;
      }
      this.search_input = search_input.toLowerCase();
      this.saveKeyword();
    },
    _init_search() {
      var that = this;
      var store_key = that.store_key;
      common_vendor.index.getStorage({
        key: store_key,
        success: (res) => {
          var old_data = JSON.parse(res.data);
          that.search_list_old = old_data;
        }
      });
    },
    saveKeyword() {
      var that = this;
      if (!this.search_input) {
        return false;
      }
      this.search_input = this.search_input.toLowerCase();
      var search_input = this.search_input;
      var store_key = that.store_key;
      common_vendor.index.getStorage({
        key: store_key,
        success: (res) => {
          var old_data = JSON.parse(res.data);
          var findIndex = old_data.indexOf(search_input);
          if (findIndex == -1) {
            old_data.unshift(search_input);
          } else {
            old_data.splice(findIndex, 1);
            old_data.unshift(search_input);
          }
          old_data.length > that.search_list_old_man_num && old_data.pop();
          common_vendor.index.setStorage({
            key: store_key,
            data: JSON.stringify(old_data)
          });
          that.search_list_old = old_data;
        },
        fail: (e) => {
          var old_data = [search_input];
          common_vendor.index.setStorage({
            key: store_key,
            data: JSON.stringify(old_data)
          });
          that.search_list_old = old_data;
        }
      });
      that.$emit("onSearchNameApi", this.search_input);
    },
    onClickDel() {
      this.search_input = "";
      this.$emit("onSearchNameApi", "");
    },
    onClickDelAll() {
      var that = this;
      console.log("---\u5168\u90E8\u5220\u9664-log--");
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u5B9A\u5168\u90E8\u5220\u9664",
        success(res) {
          if (res.confirm) {
            common_vendor.index.removeStorageSync(that.store_key);
            that.search_list_old = [];
            that.$emit("onClickDelAllApi", "");
          }
        }
      });
    },
    onClickShowHot() {
      this.is_hot_show = this.is_hot_show == true ? false : true;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.back),
    b: common_vendor.p({
      type: "arrow-left",
      size: "30",
      color: "#1296db"
    }),
    c: $props.placeholder,
    d: common_vendor.o((...args) => $options.onClickInput && $options.onClickInput(...args)),
    e: $data.search_input,
    f: common_vendor.o(($event) => $data.search_input = $event.detail.value),
    g: common_vendor.o($options.onClickInput),
    h: common_vendor.p({
      type: "search",
      size: "30",
      color: "#1296db"
    }),
    i: $props.is_show_more
  }, $props.is_show_more ? common_vendor.e({
    j: common_vendor.o($options.onClickDelAll),
    k: common_vendor.p({
      type: "trash",
      size: "25"
    }),
    l: $data.search_list_old.length == 0
  }, $data.search_list_old.length == 0 ? {} : {}, {
    m: $data.search_list_old.length > 0
  }, $data.search_list_old.length > 0 ? {
    n: common_vendor.f($data.search_list_old, (item, index, i0) => {
      return {
        a: common_vendor.t(item ? item : "\u65E0"),
        b: index,
        c: common_vendor.o(($event) => $options.onClickInputValue(item), index)
      };
    })
  } : {}, {
    o: $props.search_list_hot.length > 0
  }, $props.search_list_hot.length > 0 ? {} : {}, {
    p: $props.search_list_hot.length > 0 && $data.is_hot_show
  }, $props.search_list_hot.length > 0 && $data.is_hot_show ? {
    q: common_vendor.f($props.search_list_hot, (item, index, i0) => {
      return {
        a: "47569056-3-" + i0,
        b: common_vendor.t(item ? item : "\u65E0"),
        c: index,
        d: common_vendor.o(($event) => $options.onClickInputValue(item), index)
      };
    }),
    r: common_vendor.p({
      type: "fire",
      size: "30",
      color: "orange"
    })
  } : {}) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/yzc/Desktop/game-trade/src/uni_modules/d-search-log/components/d-search-log/d-search-log.vue"]]);
wx.createComponent(Component);

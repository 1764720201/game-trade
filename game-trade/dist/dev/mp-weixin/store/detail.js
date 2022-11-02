"use strict";
var common_vendor = require("../common/vendor.js");
const useDetail = common_vendor.defineStore({
  id: "detail",
  state: () => ({
    detail: {},
    option: "\u6E38\u620F\u622A\u56FE"
  }),
  actions: {
    async getDetail(detail) {
      Object.assign(this.detail, detail);
    },
    async getCurrentOption(option) {
      this.option = option;
    }
  },
  getters: {}
});
exports.useDetail = useDetail;

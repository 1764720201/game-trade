"use strict";
var common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  (dSearchLog + common_vendor.unref(List))();
}
const dSearchLog = () => "../../../../uni_modules/d-search-log/components/d-search-log/d-search-log.js";
const List = () => "../../../../components/List/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const store_key = "search_list";
    const search_list_hot = common_vendor.ref([
      "\u539F\u795E",
      "\u738B\u8005\u8363\u8000",
      "\u6C38\u52AB\u65E0\u95F4",
      "\u82F1\u96C4\u8054\u76DF",
      "\u548C\u5E73\u7CBE\u82F1",
      "\u706B\u5F71\u5FCD\u8005",
      "DNF"
    ]);
    const where = common_vendor.ref("");
    const game = common_vendor.ref("");
    const onSearchName = (e) => {
      where.value = `game=='${e}'`;
      game.value = e;
    };
    const onClickDelAll = () => {
      where.value = "";
      game.value = "";
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onClickDelAll),
        b: common_vendor.o(onSearchName),
        c: common_vendor.p({
          search_list_hot: search_list_hot.value,
          store_key,
          placeholder: "\u8BF7\u8F93\u5165\u6E38\u620F\u540D"
        }),
        d: where.value
      }, where.value ? {
        e: common_vendor.p({
          where: where.value,
          game: game.value
        })
      } : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-78fb6017"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Home/Search/SearchDetail/index.vue"]]);
wx.createPage(MiniProgramPage);

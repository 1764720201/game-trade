"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  _easycom_uni_dateformat2();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  _easycom_uni_dateformat();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    detail: { type: null, required: true }
  },
  setup(__props) {
    const props = __props;
    const db = common_vendor.pn.database();
    const userName = common_vendor.ref();
    const icon = common_vendor.ref();
    common_vendor.watch(() => {
      var _a;
      return (_a = props.detail) == null ? void 0 : _a.user_id;
    }, async () => {
      var _a;
      db.collection("uni-id-users").where(`_id=='${(_a = props.detail) == null ? void 0 : _a.user_id}'`).field("nickname,_id").get({ getOne: true }).then((res) => {
        var _a2;
        userName.value = (_a2 = res.result.data) == null ? void 0 : _a2.nickname;
      });
      db.collection("category").where(`name=='${props.detail.game}'`).get({ getOne: true }).then((res) => {
        icon.value = res.result.data.icon;
      });
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
      return common_vendor.e({
        a: icon.value,
        b: common_vendor.t((_a = __props.detail) == null ? void 0 : _a.region),
        c: common_vendor.t((_b = __props.detail) == null ? void 0 : _b.server),
        d: common_vendor.t((_c = __props.detail) == null ? void 0 : _c.price),
        e: ((_d = __props.detail) == null ? void 0 : _d.game) == "\u539F\u795E"
      }, ((_e = __props.detail) == null ? void 0 : _e.game) == "\u539F\u795E" ? {
        f: common_vendor.t((_f = __props.detail) == null ? void 0 : _f.email),
        g: common_vendor.t((_g = __props.detail) == null ? void 0 : _g.technology),
        h: common_vendor.t((_h = __props.detail) == null ? void 0 : _h.otherBright)
      } : {}, {
        i: ((_i = __props.detail) == null ? void 0 : _i.game) == "\u82F1\u96C4\u8054\u76DF"
      }, ((_j = __props.detail) == null ? void 0 : _j.game) == "\u82F1\u96C4\u8054\u76DF" ? {
        j: common_vendor.t(((_k = __props.detail) == null ? void 0 : _k.qualification) == "\u6709\u8D44\u683C" ? "\u6709\u5CE1\u8C37\u4E4B\u5DC5\u8D44\u683C" : "\u65E0\u5CE1\u8C37\u4E4B\u5DC5\u8D44\u683C"),
        k: common_vendor.t((_l = __props.detail) == null ? void 0 : _l.amount),
        l: common_vendor.t(((_m = __props.detail) == null ? void 0 : _m.rare) ? `\u9F99\u778E\u70AB\u5F69:${(_n = __props.detail) == null ? void 0 : _n.rare}` : "")
      } : {}, {
        m: ((_o = __props.detail) == null ? void 0 : _o.game) == "\u738B\u8005\u8363\u8000"
      }, ((_p = __props.detail) == null ? void 0 : _p.game) == "\u738B\u8005\u8363\u8000" ? {
        n: common_vendor.t(__props.detail.level),
        o: common_vendor.t(__props.detail.skin),
        p: common_vendor.t(__props.detail.legend ? "\u661F\u4F20\u8BF4:" + __props.detail.legend : ""),
        q: common_vendor.t(__props.detail.national ? "\u56FD\u6807:" + __props.detail.national : "")
      } : {}, {
        r: common_vendor.t((_q = __props.detail) == null ? void 0 : _q._id.toString().slice(0, 6)),
        s: common_vendor.t(userName.value),
        t: common_vendor.p({
          date: (_r = __props.detail) == null ? void 0 : _r.create_time,
          format: "yyyy-MM-dd"
        }),
        v: common_vendor.t((_t = (_s = __props.detail) == null ? void 0 : _s.user_id) == null ? void 0 : _t.slice(0, 6))
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77cb6531"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/Basic/index.vue"]]);
wx.createComponent(Component);

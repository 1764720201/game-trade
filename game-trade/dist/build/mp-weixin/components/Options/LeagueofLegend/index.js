"use strict";var e=require("../../../common/vendor.js"),r=require("../../../store/index.js");require("../../../store/user.js"),require("../../../store/LeagueofLegend.js"),require("../../../store/GenshinImpact.js"),require("../../../store/detail.js");const n=e.defineComponent({__name:"index",setup(n){const t=r.useStore(),{detail:s,option:o}=e.storeToRefs(t.detail);return(r,n)=>e.e({a:"游戏截图"==e.unref(o)},"游戏截图"==e.unref(o)?{b:e.f(e.unref(s).screenshot,((e,r,n)=>({a:e.url,b:e.name})))}:{},{c:"账号信息"==e.unref(o)},"账号信息"==e.unref(o)?{d:e.t(e.unref(s).grading),e:e.t(e.unref(s).amount),f:e.t(e.unref(s).skin),g:e.t(e.unref(s).dazzling),h:e.t(e.unref(s).qualification)}:{})}});var t=e._export_sfc(n,[["__scopeId","data-v-644c3f52"]]);wx.createComponent(t);
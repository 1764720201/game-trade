"use strict";var e=require("../../../common/vendor.js"),r=require("../../../store/index.js");require("../../../store/user.js"),require("../../../store/LeagueofLegend.js"),require("../../../store/GenshinImpact.js"),require("../../../store/GloryOfTheKing.js"),require("../../../store/detail.js");const n=e.defineComponent({__name:"index",setup(n){const t=r.useStore(),{detail:s,option:o}=e.storeToRefs(t.detail);return(r,n)=>e.e({a:"游戏截图"==e.unref(o)},"游戏截图"==e.unref(o)?{b:e.f(e.unref(s).screenshot,((e,r,n)=>({a:e.url,b:e.name})))}:{},{c:"账号信息"==e.unref(o)},"账号信息"==e.unref(o)?{d:e.t(e.unref(s).skin),e:e.t(e.unref(s).level),f:e.t(e.unref(s).legend?e.unref(s).legend:"无"),g:e.t(e.unref(s).national?e.unref(s).national:"无")}:{})}});var t=e._export_sfc(n,[["__scopeId","data-v-6396c6bc"]]);wx.createComponent(t);

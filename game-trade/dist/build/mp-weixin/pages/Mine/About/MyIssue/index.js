"use strict";var e=require("../../../../common/vendor.js"),r=require("../../../../store/index.js");require("../../../../store/user.js"),require("../../../../store/LeagueofLegend.js"),require("../../../../store/GenshinImpact.js"),require("../../../../store/detail.js"),Math||e.unref(s)();const s=()=>"../../../../components/MyIssue/index.js",a=e.defineComponent({__name:"index",setup(s){const a=r.useStore(),{userId:t}=e.storeToRefs(a.user),u=e.ref(0),o=e.ref(`user_id=='${t.value}'`),v=[{value:0,text:"全部"},{value:1,text:"已下架"},{value:2,text:"已售出"}];return(r,s)=>({a:e.f(v,((r,s,a)=>({a:e.t(r.text),b:r.value,c:e.o((e=>(e=>{switch(u.value=e,e){case 0:o.value=`user_id=='${t.value}'`;break;case 1:o.value=`user_id=='${t.value}'&&state==1`;break;case 2:o.value=`user_id=='${t.value}'&&state==2`}})(r.value)),r.value),d:e.s(r.value==u.value?{fontWeight:900}:{color:"#ccc"})}))),b:e.p({where:o.value})})}});var t=e._export_sfc(a,[["__scopeId","data-v-4033daf4"]]);wx.createPage(t);
"use strict";var e=require("../../../../common/vendor.js"),n=require("../../../../store/index.js");if(require("../../../../store/user.js"),require("../../../../store/LeagueofLegend.js"),require("../../../../store/GenshinImpact.js"),require("../../../../store/detail.js"),!Array){e.resolveComponent("unicloud-db")()}Math;const i=e.defineComponent({__name:"index",setup(i){const o=n.useStore(),t=e.pn.database(),d=e.ref([]),l=async()=>{const{userId:n}=e.storeToRefs(o.user),i=t.collection("collect").where(`user_id=='${n.value}'`).getTemp();await t.collection(i,"consignment").get().then((e=>{d.value=e.result.data}))};e.onLoad((async()=>{l()}));const a=n=>{e.index.navigateTo({url:`/pages/Detail/index?id=${n}`})};return(n,i)=>({a:e.f(d.value,((n,i,o)=>e.e({a:e.w((({data:n,loading:i,error:o,options:t},d,l)=>e.e({a:o},o?{b:e.t(o.message)}:{c:null==n?void 0:n.icon},{d:l,e:d})),{name:"d",path:"a["+o+"].a",vueId:"318a8aa2-0-"+o}),b:"318a8aa2-0-"+o,c:e.p({collection:"category",where:`name=='${null==n?void 0:n.consignment_id[0].game}'`,getone:!0}),d:e.t(null==n?void 0:n.consignment_id[0].region),e:e.t(null==n?void 0:n.consignment_id[0].server),f:e.o((e=>a(n.consignment_id[0]._id))),g:"原神"==(null==n?void 0:n.consignment_id[0].game)},"原神"==(null==n?void 0:n.consignment_id[0].game)?{h:e.t(null==n?void 0:n.consignment_id[0].email),i:e.t(null==n?void 0:n.consignment_id[0].level),j:e.t((null==n?void 0:n.consignment_id[0].otherBright)?null==n?void 0:n.consignment_id[0].otherBright:"无")}:{},{k:"英雄联盟"==(null==n?void 0:n.consignment_id[0].game)},"英雄联盟"==(null==n?void 0:n.consignment_id[0].game)?{l:e.t(null==n?void 0:n.consignment_id[0].amount),m:e.t(null==n?void 0:n.consignment_id[0].skin),n:e.t(null==n?void 0:n.consignment_id[0].dazzling),o:e.t(null==n?void 0:n.consignment_id[0].grading)}:{},{p:e.o((e=>a(n.consignment_id[0]._id))),q:e.t(null==n?void 0:n.consignment_id[0]._id.slice(0,6)),r:e.t(null==n?void 0:n.consignment_id[0].price.toFixed(2)),s:e.o((i=>(async n=>{await t.collection("collect").where(`_id=='${n}'`).remove().then((()=>{e.index.showToast({title:"取消收藏成功"})})),l()})(n._id))),t:n._id})))})}});var o=e._export_sfc(i,[["__scopeId","data-v-318a8aa2"]]);wx.createPage(o);
"use strict";var e=require("../../common/vendor.js");const a=e.defineComponent({__name:"index",props:{price:null},setup(a){const t=a,r=e.ref(0),u=e.ref(0);return e.watch((()=>t.price),(e=>{r.value=.05*e,r.value<20&&r.value>0&&(r.value=20),u.value=e-r.value,u.value<0&&(u.value=0)})),(a,t)=>({a:e.t(r.value.toFixed(2)),b:e.t(u.value.toFixed(2))})}});var t=e._export_sfc(a,[["__scopeId","data-v-3c391c2d"]]);wx.createComponent(t);
"use strict";var e=require("../../common/vendor.js");const o=e.defineComponent({__name:"index",props:{option:null},emits:["option"],setup(o,{emit:t}){const n=o,r=e.ref(0);return(o,a)=>({a:e.f(n.option,((o,n,a)=>({a:e.t(o.text),b:o.value,c:e.o((e=>{return n=o.value,r.value=n,void t("option",n);var n}),o.value),d:e.s(o.value==r.value?{fontWeight:900}:{color:"#ccc"})})))})}});var t=e._export_sfc(o,[["__scopeId","data-v-ec688c48"]]);wx.createComponent(t);
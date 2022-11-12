"use strict";var e=require("../../../common/vendor.js"),a=require("../../../store/index.js");if(require("../../../store/user.js"),require("../../../store/LeagueofLegend.js"),require("../../../store/GenshinImpact.js"),require("../../../store/GloryOfTheKing.js"),require("../../../store/detail.js"),!Array){e.resolveComponent("uni-data-select")()}const t=()=>"../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";Math||(e.unref(n)+e.unref(o)+e.unref(l)+t+e.unref(r)+e.unref(u))();const n=()=>"../../../components/Check/index.js",o=()=>"../../../components/File/index.js",l=()=>"../../../components/InputBox/index.js",r=()=>"../../../components/Price/index.js",u=()=>"../../../components/Button/index.js",i=e.defineComponent({__name:"index",setup(t){const n=a.useStore(),o=e.ref(),l=e.ref(),r=e.ref([]),u=e.ref(),i=e.ref(-1),s=e.ref(-1),v=e.ref(0),p=e.ref(0),c=e.ref(),d=e.ref(),{allServer:f,region:g,qualification:m,rare:x,grading:h}=e.storeToRefs(n.LeagueofLegend),j=e.reactive({game:"英雄联盟",region:"",server:"",amount:0,qualification:"",screenshot:[],rare:"",price:0,dazzling:"",skin:"",grading:""}),q=e.ref(f.value[0]),b=e=>{switch(o.value=e,e){case 0:q.value=f.value[0];break;case 1:q.value=f.value[1];break;case 2:q.value=f.value[2]}},w=e=>{l.value=e},y=e=>{r.value=e},T=e=>{u.value=e},_=e=>{i.value=e},k=e=>{s.value=e},z=e=>{v.value=e},C=e=>{p.value=e},L=e=>{c.value=e},S=e=>{d.value=e},I=e.ref(!0),N=(a,t,n,o)=>{I.value&&(o>=0?(j[a]=t[o].text,I.value=!0):(e.index.showToast({title:n,icon:"none"}),I.value=!1))},B=(a,t,n)=>{I.value&&(n?(j[a]=n,I.value=!0):(e.index.showToast({title:t,icon:"none"}),I.value=!1))},G=()=>{var a,t,n,f,b,w;I.value=!0,N("region",g.value,"请选择大区",o.value),N("server",q.value,"请选择服务器",l.value),((a,t,n)=>{var o;I.value&&((null==(o=n[0])?void 0:o.url)?(j[a]=n,I.value=!0):(e.index.showToast({title:t,icon:"none"}),I.value=!1))})("screenshot","请上传游戏截图",r.value),B("skin","请输入皮肤数",c.value),B("dazzling","请输入炫彩数",d.value),B("amount","请输入英雄数",u.value),f="grading",b="请选择单双排段位",w=null==(a=h.value[p.value])?void 0:a.text,I.value&&(w?(j[f]=w,I.value=!0):(e.index.showToast({title:b,icon:"none"}),I.value=!1)),B("price","请输入价格",v.value),j.qualification=null==(t=m.value[i.value])?void 0:t.text,j.rare=null==(n=x.value[s.value])?void 0:n.text,I.value&&e.index.navigateTo({url:`/pages/Publish/index?consignment=${JSON.stringify(j)}`})};return(a,t)=>({a:e.o(b),b:e.p({title:"大区",range:e.unref(g)}),c:e.o(w),d:e.p({title:"服务器",range:q.value}),e:e.o(y),f:e.p({title:"游戏截图"}),g:e.o(L),h:e.p({title:"皮肤数",position:"top",tips:"请填写皮肤数",type:"number"}),i:e.o(S),j:e.p({title:"炫彩数",position:"top",tips:"请填写炫彩数",type:"number"}),k:e.o(T),l:e.p({title:"英雄数",position:"top",tips:"请填写英雄数",type:"number"}),m:e.o(C),n:e.o((e=>p.value=e)),o:e.p({localdata:e.unref(h),clear:!0,placeholder:"请选择单双排段位",modelValue:p.value}),p:e.o(_),q:e.p({title:"峡谷之巅资格(选填)",range:e.unref(m)}),r:e.o(k),s:e.p({title:"龙瞎炫彩(选填)",range:e.unref(x)}),t:e.o(z),v:e.p({title:"售价",position:"left",tips:"请填写金额",type:"number"}),w:e.p({price:Number(v.value)}),x:e.o(G),y:e.p({title:"下一步",ifShowNext:!0})})}});var s=e._export_sfc(i,[["__scopeId","data-v-649cbd51"]]);wx.createComponent(s);

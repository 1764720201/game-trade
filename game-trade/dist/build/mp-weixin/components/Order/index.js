"use strict";var e=require("../../common/vendor.js"),r=require("../../store/index.js");if(require("../../store/user.js"),require("../../store/LeagueofLegend.js"),require("../../store/GenshinImpact.js"),require("../../store/GloryOfTheKing.js"),require("../../store/detail.js"),!Array){(e.resolveComponent("uni-dateformat")+e.resolveComponent("unicloud-db"))()}Math||((()=>"../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js")+(()=>"../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js"))();const o=e.defineComponent({__name:"index",props:{tabIndex:null},setup(o){const t=o,n=r.useStore(),{userId:a}=e.storeToRefs(n.user),d=e.ref(null);return e.onReachBottom((()=>{d.value.loadMore()})),(r,n)=>({a:e.w((({data:r,pagination:t,loading:n,error:a},d,i)=>e.e({a:a},a?{b:e.t(a.message)}:{c:e.f(r,((r,t,n)=>({a:r.screenshot[0].url,b:e.o((t=>{return n=0==o.tabIndex?r.consignment_id:r._id,void e.index.navigateTo({url:`/pages/Detail/index?id=${n}`});var n})),c:e.t(r.price.toFixed(2)),d:"7cbfa513-1-"+i+"-"+n+",7cbfa513-0",e:e.p({date:r.create_time,format:"yyyy-MM-dd hh:mm"}),f:r._id})))},{d:n},{},{e:0==r.length},(r.length,{}),{f:i,g:d})),{name:"d",path:"a",vueId:"7cbfa513-0"}),b:e.sr(d,"7cbfa513-0",{k:"udb"}),c:e.p({collection:0==t.tabIndex?"purchase":"consignment",orderby:"create_time desc",field:"create_time,_id, screenshot,consignment_id,price",getone:!1,where:`user_id=='${e.unref(a)}'&&state==1`})})}});var t=e._export_sfc(o,[["__scopeId","data-v-7cbfa513"]]);wx.createComponent(t);
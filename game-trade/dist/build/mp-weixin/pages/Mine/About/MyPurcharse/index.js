"use strict";var e=require("../../../../common/vendor.js"),r=require("../../../../store/index.js");require("../../../../store/user.js"),require("../../../../store/LeagueofLegend.js"),require("../../../../store/GenshinImpact.js"),require("../../../../store/GloryOfTheKing.js"),require("../../../../store/detail.js"),Math||(e.unref(t)+e.unref(s))();const s=()=>"../../../../components/AboutOption/index.js",t=()=>"../../../../components/About/index.js",u=e.defineComponent({__name:"index",setup(s){const t=r.useStore(),{userId:u}=e.storeToRefs(t.user),o=e.ref(`user_id=='${u.value}'`),a=[{value:0,text:"全部"},{value:1,text:"已支付"},{value:2,text:"交易成功"}],n=e=>{switch(e){case 0:o.value=`user_id=='${u.value}'`;break;case 1:o.value=`user_id=='${u.value}'&&state==1`;break;case 2:o.value=`user_id=='${u.value}'&&state==2`}};return(r,s)=>({a:e.o(n),b:e.p({option:a}),c:e.p({where:o.value,collection:"purchase"})})}});wx.createPage(u);

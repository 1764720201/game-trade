"use strict";var e=require("../../../../common/vendor.js"),o=require("../../../../store/index.js");if(require("../../../../store/user.js"),require("../../../../store/LeagueofLegend.js"),require("../../../../store/GenshinImpact.js"),require("../../../../store/GloryOfTheKing.js"),require("../../../../store/detail.js"),!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("uni-popup-dialog")+e.resolveComponent("uni-popup"))()}const n=()=>"../../../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js",t=()=>"../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";Math||((()=>"../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+e.unref(i)+e.unref(s)+n+t)();const i=()=>"../../../../components/InputBox/index.js",s=()=>"../../../../components/Button/index.js",u=e.defineComponent({__name:"index",setup(n){const t=o.useStore(),{balance:i}=e.storeToRefs(t.user),s=()=>{e.index.navigateTo({url:"/pages/Mine/About/MyWallet/DealDetail/index"})},u=e.ref(null),a=()=>{u.value.open()},p=e.rn.database(),r=async o=>{await p.collection("balance").add({money:parseFloat(o)}),t.user.getBalance(),e.index.showToast({title:"充值成功"})},l=e.ref(),d=e=>{l.value=e},c=e.ref(""),f=e=>{c.value=e},m=async()=>{l.value?c.value?l.value>i.value?e.index.showToast({title:"提现的金额不能大于余额",icon:"none"}):(await p.collection("balance").add({money:-Number(l.value)}),t.user.getBalance(),e.index.showToast({title:"提现成功"})):e.index.showToast({title:"请输入支付宝账号",icon:"none"}):e.index.showToast({title:"请输入提现的金额",icon:"none"})};return(o,n)=>({a:e.p({type:"forward",size:"18",color:"white"}),b:e.o(s),c:e.t(e.unref(i).toFixed(2)),d:e.o(a),e:e.o(d),f:e.p({title:"提现金额",position:"left",type:"number",tips:"请输入提现金额"}),g:e.o(f),h:e.p({title:"支付宝",position:"left",type:"text",tips:"请输入支付宝账号"}),i:e.o(m),j:e.p({title:"提现"}),k:e.sr("inputClose","ff9ed010-5,ff9ed010-4"),l:e.o(r),m:e.p({mode:"input",title:"破解版",value:o.m,placeholder:"请输入充值的金额"}),n:e.sr(u,"ff9ed010-4",{k:"inputDialog"}),o:e.p({type:"dialog"})})}});var a=e._export_sfc(u,[["__scopeId","data-v-ff9ed010"]]);wx.createPage(a);
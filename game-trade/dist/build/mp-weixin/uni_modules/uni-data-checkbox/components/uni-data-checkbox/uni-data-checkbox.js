"use strict";var e=require("../../../../common/vendor.js");const t={name:"uniDataChecklist",mixins:[e.pn.mixinDatacom||{}],emits:["input","update:modelValue","change"],props:{mode:{type:String,default:"default"},multiple:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>""},modelValue:{type:[Array,String,Number],default:()=>""},localdata:{type:Array,default:()=>[]},min:{type:[Number,String],default:""},max:{type:[Number,String],default:""},wrap:{type:Boolean,default:!1},icon:{type:String,default:"left"},selectedColor:{type:String,default:""},selectedTextColor:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},disabled:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},watch:{localdata:{handler(e){this.range=e,this.dataList=this.getDataList(this.getSelectedValue(e))},deep:!0},mixinDatacomResData(e){this.range=e,this.dataList=this.getDataList(this.getSelectedValue(e))},value(e){this.dataList=this.getDataList(e)},modelValue(e){this.dataList=this.getDataList(e)}},data:()=>({dataList:[],range:[],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"},isLocal:!0,styles:{selectedColor:"#2979ff",selectedTextColor:"#666"},isTop:0}),computed:{dataValue(){return""===this.value?this.modelValue:(this.modelValue,this.value)}},created(){this.localdata&&0!==this.localdata.length?(this.isLocal=!0,this.range=this.localdata,this.dataList=this.getDataList(this.getSelectedValue(this.range))):this.collection&&(this.isLocal=!1,this.loadData())},methods:{loadData(){this.mixinDatacomGet().then((e=>{this.mixinDatacomResData=e.result.data,0===this.mixinDatacomResData.length?(this.isLocal=!1,this.mixinDatacomErrorMessage=this.emptyText):this.isLocal=!0})).catch((e=>{this.mixinDatacomErrorMessage=e.message}))},getForm(e="uniForms"){let t=this.$parent,s=t.$options.name;for(;s!==e;){if(t=t.$parent,!t)return!1;s=t.$options.name}return t},chagne(e){const t=e.detail.value;let s={value:[],data:[]};if(this.multiple)this.range.forEach((e=>{t.includes(e[this.map.value]+"")&&(s.value.push(e[this.map.value]),s.data.push(e))}));else{const e=this.range.find((e=>e[this.map.value]+""===t));e&&(s={value:e[this.map.value],data:e})}this.$emit("input",s.value),this.$emit("update:modelValue",s.value),this.$emit("change",{detail:s}),this.multiple?this.dataList=this.getDataList(s.value,!0):this.dataList=this.getDataList(s.value)},getDataList(e){let t=JSON.parse(JSON.stringify(this.range)),s=[];return this.multiple&&(Array.isArray(e)||(e=[])),t.forEach(((t,l)=>{if(t.disabled=t.disable||t.disabled||!1,this.multiple)if(e.length>0){let s=e.find((e=>e===t[this.map.value]));t.selected=void 0!==s}else t.selected=!1;else t.selected=e===t[this.map.value];s.push(t)})),this.setRange(s)},setRange(e){let t=e.filter((e=>e.selected)),s=Number(this.min)||0,l=Number(this.max)||"";return e.forEach(((a,i)=>{if(this.multiple){if(t.length<=s){void 0!==t.find((e=>e[this.map.value]===a[this.map.value]))&&(a.disabled=!0)}if(t.length>=l&&""!==l){void 0===t.find((e=>e[this.map.value]===a[this.map.value]))&&(a.disabled=!0)}}this.setStyles(a,i),e[i]=a})),e},setStyles(e,t){e.styleBackgroud=this.setStyleBackgroud(e),e.styleIcon=this.setStyleIcon(e),e.styleIconText=this.setStyleIconText(e),e.styleRightIcon=this.setStyleRightIcon(e)},getSelectedValue(e){if(!this.multiple)return this.dataValue;let t=[];return e.forEach((e=>{e.selected&&t.push(e[this.map.value])})),this.dataValue.length>0?this.dataValue:t},setStyleBackgroud(e){let t={},s=this.selectedColor?this.selectedColor:"#2979ff";this.selectedColor&&("list"!==this.mode&&(t["border-color"]=e.selected?s:"#DCDFE6"),"tag"===this.mode&&(t["background-color"]=e.selected?s:"#f5f5f5"));let l="";for(let a in t)l+=`${a}:${t[a]};`;return l},setStyleIcon(e){let t={},s="";if(this.selectedColor){let s=this.selectedColor?this.selectedColor:"#2979ff";t["background-color"]=e.selected?s:"#fff",t["border-color"]=e.selected?s:"#DCDFE6",!e.selected&&e.disabled&&(t["background-color"]="#F2F6FC",t["border-color"]=e.selected?s:"#DCDFE6")}for(let l in t)s+=`${l}:${t[l]};`;return s},setStyleIconText(e){let t={},s="";if(this.selectedColor){let s=this.selectedColor?this.selectedColor:"#2979ff";"tag"===this.mode?t.color=e.selected?this.selectedTextColor?this.selectedTextColor:"#fff":"#666":t.color=e.selected?this.selectedTextColor?this.selectedTextColor:s:"#666",!e.selected&&e.disabled&&(t.color="#999")}for(let l in t)s+=`${l}:${t[l]};`;return s},setStyleRightIcon(e){let t={},s="";"list"===this.mode&&(t["border-color"]=e.selected?this.styles.selectedColor:"#DCDFE6");for(let l in t)s+=`${l}:${t[l]};`;return s}}};if(!Array){e.resolveComponent("uni-load-more")()}Math;var s=e._export_sfc(t,[["render",function(t,s,l,a,i,o){return e.e({a:!i.isLocal},i.isLocal?e.e({e:l.multiple},l.multiple?{f:e.f(i.dataList,((t,s,a)=>e.e({a:l.disabled||!!t.disabled,b:t[l.map.value]+"",c:t.selected},"tag"!==l.mode&&"list"!==l.mode||"list"===l.mode&&"left"===l.icon?{d:e.s(t.styleIcon)}:{},{e:e.t(t[l.map.text]),f:e.s(t.styleIconText)},"list"===l.mode&&"right"===l.icon?{g:e.s(t.styleBackgroud)}:{},{h:e.n(t.selected?"is-checked":""),i:e.n(l.disabled||t.disabled?"is-disable":""),j:e.n(0!==s&&"list"===l.mode?"is-list-border":""),k:e.s(t.styleBackgroud),l:s}))),g:"tag"!==l.mode&&"list"!==l.mode||"list"===l.mode&&"left"===l.icon,h:"list"===l.mode&&"right"===l.icon,i:"list"===l.mode&&"left"===l.icon?1:"",j:e.n("is--"+l.mode),k:"list"===l.mode||l.wrap?1:"",l:e.o(((...e)=>o.chagne&&o.chagne(...e)))}:{m:e.f(i.dataList,((t,s,a)=>e.e({a:l.disabled||t.disabled,b:t[l.map.value]+"",c:t.selected},"tag"!==l.mode&&"list"!==l.mode||"list"===l.mode&&"left"===l.icon?{d:e.s(t.styleIcon),e:e.s(t.styleBackgroud)}:{},{f:e.t(t[l.map.text]),g:e.s(t.styleIconText)},"list"===l.mode&&"right"===l.icon?{h:e.s(t.styleRightIcon)}:{},{i:e.n(t.selected?"is-checked":""),j:e.n(l.disabled||t.disabled?"is-disable":""),k:e.n(0!==s&&"list"===l.mode?"is-list-border":""),l:e.s(t.styleBackgroud),m:s}))),n:"tag"!==l.mode&&"list"!==l.mode||"list"===l.mode&&"left"===l.icon,o:"list"===l.mode&&"right"===l.icon,p:"list"===l.mode&&"left"===l.icon?1:"",q:e.n("is--"+l.mode),r:"list"===l.mode?1:"",s:l.wrap?1:"",t:e.o(((...e)=>o.chagne&&o.chagne(...e)))}):e.e({b:!t.mixinDatacomErrorMessage},t.mixinDatacomErrorMessage?{d:e.t(t.mixinDatacomErrorMessage)}:{c:e.p({status:"loading",iconType:"snow",iconSize:18,"content-text":i.contentText})}),{v:i.isTop+"px"})}]]);wx.createComponent(s);

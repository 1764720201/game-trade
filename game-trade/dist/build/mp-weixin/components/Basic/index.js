"use strict";var e=require("../../common/vendor.js");if(!Array){e.resolveComponent("uni-dateformat")()}Math;const l=e.defineComponent({__name:"index",props:{detail:null},setup(l){const t=l,i=e.rn.database(),a=e.ref(),d=e.ref();return e.watch((()=>{var e;return null==(e=t.detail)?void 0:e.user_id}),(async()=>{var e;i.collection("uni-id-users").where(`_id=='${null==(e=t.detail)?void 0:e.user_id}'`).field("nickname,_id").get({getOne:!0}).then((e=>{var l;a.value=null==(l=e.result.data)?void 0:l.nickname})),i.collection("category").where(`name=='${t.detail.game}'`).get({getOne:!0}).then((e=>{d.value=e.result.data.icon}))})),(t,i)=>{var n,o,r,u,v,c,s,m,g,_,p,f,h,y,k,w,q,x,C,M;return e.e({a:d.value,b:e.t(null==(n=l.detail)?void 0:n.region),c:e.t(null==(o=l.detail)?void 0:o.server),d:e.t(null==(r=l.detail)?void 0:r.price),e:"原神"==(null==(u=l.detail)?void 0:u.game)},"原神"==(null==(v=l.detail)?void 0:v.game)?{f:e.t(null==(c=l.detail)?void 0:c.email),g:e.t(null==(s=l.detail)?void 0:s.technology),h:e.t(null==(m=l.detail)?void 0:m.otherBright)}:{},{i:"英雄联盟"==(null==(g=l.detail)?void 0:g.game)},"英雄联盟"==(null==(_=l.detail)?void 0:_.game)?{j:e.t("有资格"==(null==(p=l.detail)?void 0:p.qualification)?"有峡谷之巅资格":"无峡谷之巅资格"),k:e.t(null==(f=l.detail)?void 0:f.amount),l:e.t((null==(h=l.detail)?void 0:h.rare)?`龙瞎炫彩:${null==(y=l.detail)?void 0:y.rare}`:"")}:{},{m:"王者荣耀"==(null==(k=l.detail)?void 0:k.game)},"王者荣耀"==(null==(w=l.detail)?void 0:w.game)?{n:e.t(l.detail.level),o:e.t(l.detail.skin),p:e.t(l.detail.legend?"星传说:"+l.detail.legend:""),q:e.t(l.detail.national?"国标:"+l.detail.national:"")}:{},{r:e.t(null==(q=l.detail)?void 0:q._id.toString().slice(0,6)),s:e.t(a.value),t:e.p({date:null==(x=l.detail)?void 0:x.create_time,format:"yyyy-MM-dd"}),v:e.t(null==(M=null==(C=l.detail)?void 0:C.user_id)?void 0:M.slice(0,6))})}}});var t=e._export_sfc(l,[["__scopeId","data-v-dc5d7908"]]);wx.createComponent(t);

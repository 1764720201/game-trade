"use strict";var e=require("../../../../common/vendor.js");Math||(a+e.unref(o))();const a=()=>"../../../../uni_modules/d-search-log/components/d-search-log/d-search-log.js",o=()=>"../../../../components/List/index.js",r=e.defineComponent({__name:"index",setup(a){const o=e.ref(["原神","王者荣耀","永劫无间","英雄联盟","和平精英","火影忍者","DNF"]),r=e.ref(""),s=e.ref(""),t=e=>{r.value=`game=='${e}'`,s.value=e},c=()=>{r.value="",s.value=""};return(a,l)=>e.e({a:e.o(c),b:e.o(t),c:e.p({search_list_hot:o.value,store_key:"search_list",placeholder:"请输入游戏名"}),d:r.value},r.value?{e:e.p({where:r.value,game:s.value})}:{})}});var s=e._export_sfc(r,[["__scopeId","data-v-1240cb3e"]]);wx.createPage(s);

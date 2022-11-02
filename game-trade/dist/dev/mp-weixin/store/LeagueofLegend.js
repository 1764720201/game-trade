"use strict";
var common_vendor = require("../common/vendor.js");
const useLeagueofLegend = common_vendor.defineStore({
  id: "\u82F1\u96C4\u8054\u76DF",
  state: () => ({
    region: [
      { value: 0, text: "\u7535\u4FE1" },
      { value: 1, text: "\u7F51\u901A" },
      { value: 2, text: "\u5CE1\u8C37\u4E4B\u5DC5" }
    ],
    allServer: [
      [
        { value: 0, text: "\u827E\u6B27\u5C3C\u4E9A" },
        { value: 1, text: "\u7956\u5B89" },
        { value: 2, text: "\u8BFA\u514B\u8428\u65AF" },
        { value: 3, text: "\u73ED\u5FB7\u5C14\u57CE" },
        { value: 4, text: "\u76AE\u5C14\u7279\u6C83\u592B" },
        { value: 5, text: "\u6218\u4E89\u5B66\u9662" },
        { value: 6, text: "\u5DE8\u795E\u5CF0" },
        { value: 7, text: "\u96F7\u745F\u5B88\u5907" },
        { value: 8, text: "\u88C1\u51B3\u4E4B\u5730" },
        { value: 9, text: "\u9ED1\u8272\u73AB\u7470" },
        { value: 10, text: "\u6697\u5F71\u5C9B" },
        { value: 11, text: "\u94A2\u94C1\u70C8\u9633" },
        { value: 12, text: "\u6C34\u6676\u4E4B\u75D5" },
        { value: 13, text: "\u5747\u8861\u6559\u6D3E" },
        { value: 14, text: "\u5F71\u6D41" },
        { value: 15, text: "\u5B88\u671B\u4E4B\u6D77" },
        { value: 16, text: "\u5F81\u670D\u4E4B\u6D77" },
        { value: 17, text: "\u5361\u62C9\u66FC\u8FBE" },
        { value: 18, text: "\u76AE\u57CE\u8B66\u5907" }
      ],
      [
        { value: 0, text: "\u76AE\u5C14\u5409\u6C83\u7279" },
        { value: 1, text: "\u5FB7\u739B\u897F\u4E9A" },
        { value: 2, text: "\u5F17\u96F7\u5C14\u5353\u5FB7" },
        { value: 3, text: "\u65E0\u754F\u5148\u950B" },
        { value: 4, text: "\u626D\u66F2\u4E1B\u6797" },
        { value: 5, text: "\u5DE8\u9F99\u4E4B\u5DE2" },
        { value: 6, text: "\u7537\u7235\u9886\u57DF" }
      ],
      [{ value: 0, text: "\u5CE1\u8C37\u4E4B\u5DC5" }]
    ],
    qualification: [
      {
        value: 0,
        text: "\u6709\u8D44\u683C"
      },
      {
        value: 1,
        text: "\u65E0\u8D44\u683C"
      }
    ],
    rare: [
      { value: 0, text: "\u98DE\u9F99\u5728\u5929" },
      { value: 1, text: "\u4EA2\u9F99\u6709\u6094" },
      { value: 2, text: "\u8DC3\u9F99\u5728\u6E0A" },
      { value: 3, text: "\u9F99\u6218\u4E8E\u91CE" },
      { value: 4, text: "\u89C1\u9F99\u5728\u7530" },
      { value: 5, text: "\u4E58\u9F99\u5FA1\u5929" },
      { value: 6, text: "\u9F99\u5FB7\u800C\u9690" },
      { value: 7, text: "\u6F5C\u9F99\u52FF\u7528" }
    ],
    grading: [
      { value: 0, text: "\u575A\u97E7\u9ED1\u94C1" },
      { value: 1, text: "\u82F1\u52C7\u9EC4\u94DC" },
      { value: 2, text: "\u4E0D\u5C48\u767D\u94F6" },
      { value: 3, text: "\u8363\u8000\u9EC4\u91D1" },
      { value: 4, text: "\u534E\u8D35\u94C2\u91D1" },
      { value: 5, text: "\u7480\u74A8\u94BB\u77F3" },
      { value: 6, text: "\u8D85\u51E1\u5927\u5E08" },
      { value: 7, text: "\u50B2\u4E16\u5B97\u5E08" },
      { value: 8, text: "\u6700\u5F3A\u738B\u8005" }
    ]
  }),
  getters: {}
});
exports.useLeagueofLegend = useLeagueofLegend;

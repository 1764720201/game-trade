"use strict";
var common_vendor = require("../common/vendor.js");
const useGenshinImpact = common_vendor.defineStore({
  id: "GenshinImpact",
  state: () => ({
    region: [
      {
        value: 0,
        text: "\u5B98\u670D"
      },
      {
        value: 1,
        text: "B\u670D"
      }
    ],
    allServer: [
      [
        {
          value: 0,
          text: "\u5929\u7A7A\u5C9B"
        }
      ],
      [
        {
          value: 0,
          text: "\u4E16\u754C\u6811"
        }
      ]
    ],
    email: [
      {
        value: 0,
        text: "\u672A\u7ED1\u5B9A\u90AE\u7BB1"
      },
      {
        value: 1,
        text: "\u9001\u672A\u5B9E\u540D\u90AE\u7BB1"
      },
      {
        value: 2,
        text: "\u9001\u5DF2\u5B9E\u540D\u90AE\u7BB1"
      },
      {
        value: 3,
        text: "\u666E\u901AQ\u90AE(\u968F\u6E38\u620F\u51FA\u552E)"
      },
      {
        value: 4,
        text: "\u5B57\u6BCDQ\u90AE"
      },
      {
        value: 5,
        text: "\u90AE\u7BB1\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528"
      },
      {
        value: 6,
        text: "\u4E0D\u9001\u90AE\u7BB1"
      },
      {
        value: 7,
        text: "B\u670D\u65E0\u9700\u8D60\u9001\u90AE\u7BB1"
      }
    ],
    technology: [
      { value: 0, text: "\u4E0D\u662F\u79D1\u6280\u53F7" },
      { value: 1, text: "\u662F\u79D1\u6280\u53F7" }
    ],
    autonym: [{ value: 0, text: "\u662F" }, { value: 1, text: "\u5426" }]
  })
});
exports.useGenshinImpact = useGenshinImpact;

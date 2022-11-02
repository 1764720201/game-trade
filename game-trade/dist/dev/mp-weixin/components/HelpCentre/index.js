"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Item)();
}
const Item = () => "../Item/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    tabIndex: { type: Number, required: true }
  },
  setup(__props) {
    const props = __props;
    const helpList = common_vendor.ref([
      [
        {
          value: 0,
          text: "\u9632\u9A97\u6307\u5357"
        },
        {
          value: 1,
          text: "\u6CA1\u6709\u627E\u5230\u6211\u60F3\u8981\u7684\u6E38\u620F\u600E\u4E48\u529E?"
        },
        {
          value: 2,
          text: "\u4EC0\u4E48\u662F\u627E\u56DE\u5305\u8D54\u670D\u52A1?"
        },
        {
          value: 3,
          text: "\u5982\u4F55\u66F4\u6362APP\u6362\u7ED1\u624B\u673A?"
        },
        {
          value: 4,
          text: "\u6CA1\u6709\u627E\u5230\u6211\u60F3\u8981\u7684\u6E38\u620F\u600E\u4E48\u529E"
        },
        {
          value: 5,
          text: "\u8D26\u53F7\u88AB\u6076\u610F\u627E\u56DE\u4E86\u600E\u4E48\u529E?"
        },
        {
          value: 6,
          text: "\u4E3A\u4EC0\u4E48\u6211\u65E0\u6CD5\u76F4\u63A5\u8054\u7CFB\u5356\u5BB6?"
        }
      ],
      [
        {
          value: 0,
          text: "\u8BA2\u5355\u53D6\u6D88\u540E\uFF0C\u9000\u6B3E\u9000\u5230\u54EA\u91CC?"
        },
        {
          value: 1,
          text: "\u4EA4\u6613\u65F6\uFF0C\u5356\u5BB6\u8FDF\u8FDF\u4E0D\u56DE\u590D\u600E\u4E48\u529E?"
        }
      ],
      [
        {
          value: 0,
          text: "\u4EC0\u4E48\u65F6\u9AD8\u7EA7\u9274\u5B9A? \u4EC0\u4E48\u662F\u666E\u901A\u9274\u5B9A?"
        },
        {
          value: 1,
          text: "\u4EC0\u4E48\u662F\u7701\u5FC3\u5BC4\u552E?"
        },
        {
          value: 2,
          text: "\u4E3A\u4EC0\u4E48\u6211\u53D1\u5E03\u7684\u5546\u54C1\u6CA1\u4EBA\u8D2D\u4E70?"
        },
        {
          value: 3,
          text: "\u63D0\u73B0\u540E\u591A\u4E45\u624D\u80FD\u5230\u8D26"
        }
      ],
      [
        {
          value: 0,
          text: "\u5982\u4F55\u8054\u7CFB\u552E\u540E\u5BA2\u670D"
        },
        {
          value: 1,
          text: "\u5982\u4F55\u7533\u8BF7\u552E\u540E"
        }
      ]
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(helpList.value[props.tabIndex], (item, k0, i0) => {
          return {
            a: "6ab9b3a2-0-" + i0,
            b: common_vendor.p({
              name: item.text
            }),
            c: item.value
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ab9b3a2"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/components/HelpCentre/index.vue"]]);
wx.createComponent(Component);

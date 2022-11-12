"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(InputBox) + common_vendor.unref(Check) + common_vendor.unref(Publish))();
}
const InputBox = () => "../../components/InputBox/index.js";
const Check = () => "../../components/Check/index.js";
const Publish = () => "../../components/Button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const consignment = common_vendor.reactive({
      game: "",
      region: "",
      price: 0
    });
    const account = common_vendor.ref();
    const password = common_vendor.ref();
    const confirm = common_vendor.ref();
    const phone = common_vendor.ref();
    common_vendor.onLoad((options) => {
      Object.assign(consignment, JSON.parse(options.consignment));
      verifyConfirm();
    });
    const agree = common_vendor.ref(false);
    const ifAgree = (e) => {
      if (e.detail.value[0]) {
        agree.value = true;
      } else {
        agree.value = false;
      }
    };
    const materials = [
      {
        value: 0,
        text: "\u63D0\u4F9B"
      },
      {
        value: 1,
        text: "\u4E0D\u63D0\u4F9B"
      }
    ];
    const express = [
      {
        value: 0,
        text: "\u53D1\u5E03"
      },
      {
        value: 1,
        text: "\u4E0D\u53D1\u5E03"
      }
    ];
    const accountInfo = {
      account: "",
      password: "",
      phone: "",
      materials: "",
      express: ""
    };
    const getAccount = (value) => {
      account.value = value;
    };
    const getPassword = (value) => {
      password.value = value;
    };
    const getConfirm = (value) => {
      confirm.value = value;
    };
    const getPhone = (value) => {
      phone.value = value;
    };
    const materialsIndex = common_vendor.ref();
    const expressIndex = common_vendor.ref();
    const getMaterialsIndex = (value) => {
      materialsIndex.value = value;
    };
    const getExpressIndex = (value) => {
      expressIndex.value = value;
    };
    const next = common_vendor.ref(true);
    const verifyInput = (title, value, content) => {
      if (next.value) {
        if (content) {
          next.value = true;
          accountInfo[value] = content;
        } else {
          common_vendor.index.showToast({
            title,
            icon: "none"
          });
          next.value = false;
        }
      }
    };
    const verifyCheck = (value, range, title, index) => {
      if (next.value) {
        if (index >= 0) {
          accountInfo[value] = range[index].text;
          next.value = true;
        } else {
          common_vendor.index.showToast({
            title,
            icon: "none"
          });
          next.value = false;
        }
      }
    };
    const ifSame = common_vendor.ref(true);
    const verifyConfirm = () => {
      common_vendor.watch(
        () => [password.value, confirm.value],
        () => {
          if (password.value != confirm.value) {
            ifSame.value = false;
          } else {
            ifSame.value = true;
          }
        }
      );
    };
    const db = common_vendor.rn.database();
    const publish = async () => {
      consignment.price = Number(consignment.price);
      consignment.state = 0;
      next.value = true;
      if (!ifSame.value) {
        common_vendor.index.showToast({
          title: "\u8BF7\u8F93\u5165\u76F8\u540C\u7684\u5BC6\u7801",
          icon: "none"
        });
        return;
      }
      verifyInput("\u8BF7\u8F93\u5165\u8D26\u53F7", "account", account.value);
      verifyInput("\u8BF7\u8F93\u5165\u5BC6\u7801", "password", password.value);
      verifyInput("\u8BF7\u8F93\u5165\u624B\u673A\u53F7", "phone", phone.value);
      verifyCheck(
        "materials",
        materials,
        "\u8BF7\u9009\u62E9\u662F\u5426\u63D0\u4F9B\u5305\u8D54\u6750\u6599",
        materialsIndex.value
      );
      verifyCheck(
        "express",
        express,
        "\u8BF7\u9009\u62E9\u662F\u5426\u540C\u65F6\u53D1\u5E03\u6025\u901F\u56DE\u6536",
        expressIndex.value
      );
      if (!agree.value && next.value) {
        common_vendor.index.showToast({
          title: "\u8BF7\u540C\u610F\u4EA4\u6613\u89C4\u5219",
          icon: "none"
        });
        return;
      }
      await db.collection("consignment").add(Object.assign(accountInfo, consignment)).then(() => {
        common_vendor.index.reLaunch({
          url: "/pages/Home/index",
          success() {
            common_vendor.index.showToast({
              title: "\u53D1\u5E03\u6210\u529F"
            });
          }
        });
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(getAccount),
        b: common_vendor.p({
          title: "\u6E38\u620F\u8D26\u53F7",
          tips: "\u8BF7\u586B\u5199\u767B\u5F55\u8D26\u53F7(\u5FAE\u4FE1/QQ\u7B49)",
          type: "text",
          position: "left"
        }),
        c: common_vendor.o(getPassword),
        d: common_vendor.p({
          title: "\u767B\u9646\u5BC6\u7801",
          tips: "\u8BF7\u586B\u5199\u6E38\u620F\u5BC6\u7801",
          type: "password",
          position: "left"
        }),
        e: common_vendor.o(getConfirm),
        f: common_vendor.p({
          title: "\u786E\u8BA4\u767B\u9646\u5BC6\u7801",
          tips: "\u8BF7\u786E\u8BA4\u6E38\u620F\u5BC6\u7801",
          type: "password",
          position: "left"
        }),
        g: !ifSame.value
      }, !ifSame.value ? {} : {}, {
        h: common_vendor.o(getPhone),
        i: common_vendor.p({
          title: "\u624B\u673A\u53F7",
          tips: "\u8BF7\u586B\u5199\u8054\u7CFB\u53F7\u7801",
          type: "number",
          position: "left"
        }),
        j: common_vendor.o(getMaterialsIndex),
        k: common_vendor.p({
          range: materials,
          title: "\u5305\u8D54\u6750\u6599"
        }),
        l: common_vendor.o(getExpressIndex),
        m: common_vendor.p({
          range: express,
          title: "\u662F\u5426\u540C\u65F6\u53D1\u5E03\u6025\u901F\u56DE\u6536"
        }),
        n: agree.value,
        o: common_vendor.o(ifAgree),
        p: common_vendor.o(publish),
        q: common_vendor.p({
          title: "\u53D1\u5E03"
        })
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5c7c8244"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/pages/Publish/index.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uniIdPages_config = require("../../config.js");
var uni_modules_uniIdPages_common_loginPage_mixin = require("../../common/login-page.mixin.js");
require("../../common/store.js");
const _sfc_main = {
  mixins: [uni_modules_uniIdPages_common_loginPage_mixin.mixin],
  data() {
    return {
      type: "",
      phone: "",
      focusPhone: false,
      logo: "/static/logo.png"
    };
  },
  computed: {
    async loginTypes() {
      return uni_modules_uniIdPages_config.config.loginTypes;
    },
    isPhone() {
      return /^1\d{10}$/.test(this.phone);
    },
    imgSrc() {
      return "/uni_modules/uni-id-pages/static/login/" + this.type + ".png";
    }
  },
  async onLoad(e) {
    console.log(e);
    let type = e.type || uni_modules_uniIdPages_config.config.loginTypes[0];
    this.type = type;
    if (type != "univerify") {
      this.focusPhone = true;
    }
    this.$nextTick(() => {
      if (["weixin", "apple"].includes(type)) {
        this.$refs.uniFabLogin.servicesList = this.$refs.uniFabLogin.servicesList.filter(
          (item) => item.id != type
        );
      }
    });
    common_vendor.index.$on("uni-id-pages-set-login-type", (type2) => {
      this.type = type2;
    });
  },
  onShow() {
  },
  onUnload() {
    common_vendor.index.$off("uni-id-pages-set-login-type");
  },
  onReady() {
  },
  methods: {
    quickLogin(e) {
      var _a, _b;
      let options = {};
      if ((_a = e.detail) == null ? void 0 : _a.code) {
        options.phoneNumberCode = e.detail.code;
      }
      if (this.type === "weixinMobile" && !((_b = e.detail) == null ? void 0 : _b.code))
        return;
      this.$refs.uniFabLogin.login_before(this.type, true, options);
    },
    toSmsPage() {
      console.log("toSmsPage", this.agree);
      if (!this.isPhone) {
        this.focusPhone = true;
        return common_vendor.index.showToast({
          title: "\u624B\u673A\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E",
          icon: "none"
        });
      }
      if (this.needAgreements && !this.agree) {
        return this.$refs.agreements.popup(this.toSmsPage);
      }
      common_vendor.index.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber=" + this.phone
      });
    },
    toPwdLogin() {
      common_vendor.index.navigateTo({
        url: "../login/password"
      });
    },
    chooseArea() {
      common_vendor.index.showToast({
        title: "\u6682\u4E0D\u652F\u6301\u5176\u4ED6\u56FD\u5BB6",
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_id_pages_agreements2 = common_vendor.resolveComponent("uni-id-pages-agreements");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_id_pages_fab_login2 = common_vendor.resolveComponent("uni-id-pages-fab-login");
  (_easycom_uni_id_pages_agreements2 + _easycom_uni_easyinput2 + _easycom_uni_id_pages_fab_login2)();
}
const _easycom_uni_id_pages_agreements = () => "../../components/uni-id-pages-agreements/uni-id-pages-agreements.js";
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_id_pages_fab_login = () => "../../components/uni-id-pages-fab-login/uni-id-pages-fab-login.js";
if (!Math) {
  (_easycom_uni_id_pages_agreements + _easycom_uni_easyinput + _easycom_uni_id_pages_fab_login)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.logo,
    b: ["apple", "weixin", "weixinMobile"].includes($data.type)
  }, ["apple", "weixin", "weixinMobile"].includes($data.type) ? common_vendor.e({
    c: $data.type !== "weixinMobile"
  }, $data.type !== "weixinMobile" ? {
    d: common_vendor.o((...args) => $options.quickLogin && $options.quickLogin(...args)),
    e: $options.imgSrc
  } : {
    f: common_vendor.o((...args) => $options.quickLogin && $options.quickLogin(...args))
  }, {
    g: common_vendor.sr("agreements", "1a0a128a-0"),
    h: common_vendor.p({
      scope: "register"
    })
  }) : {
    i: common_vendor.o((...args) => $options.chooseArea && $options.chooseArea(...args)),
    j: common_vendor.o(($event) => $data.focusPhone = false),
    k: common_vendor.o(($event) => $data.phone = $event),
    l: common_vendor.p({
      focus: $data.focusPhone,
      type: "number",
      inputBorder: false,
      maxlength: "11",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      modelValue: $data.phone
    }),
    m: common_vendor.sr("agreements", "1a0a128a-2"),
    n: common_vendor.p({
      scope: "register"
    }),
    o: common_vendor.o((...args) => $options.toSmsPage && $options.toSmsPage(...args))
  }, {
    p: common_vendor.sr("uniFabLogin", "1a0a128a-3")
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1a0a128a"], ["__file", "C:/Users/yzc/Desktop/game-trade/src/uni_modules/uni-id-pages/pages/login/login-withoutpwd.vue"]]);
wx.createPage(MiniProgramPage);

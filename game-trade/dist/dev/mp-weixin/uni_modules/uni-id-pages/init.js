"use strict";
var common_vendor = require("../../common/vendor.js");
var uni_modules_uniIdPages_config = require("./config.js");
const uniIdCo = common_vendor.rn.importObject("uni-id-co", {
  customUI: true
});
const {
  loginTypes,
  debug
} = uni_modules_uniIdPages_config.config;
async function uniIdPageInit() {
  if (debug) {
    let {
      supportedLoginType
    } = await uniIdCo.getSupportedLoginType();
    console.log("supportedLoginType: " + JSON.stringify(supportedLoginType));
    let data = {
      smsCode: "mobile-code",
      univerify: "univerify",
      username: "username-password",
      weixin: "weixin",
      qq: "qq",
      xiaomi: "xiaomi",
      sinaweibo: "sinaweibo",
      taobao: "taobao",
      facebook: "facebook",
      google: "google",
      alipay: "alipay",
      apple: "apple"
    };
    let list = loginTypes.filter((type) => !supportedLoginType.includes(data[type]));
    if (list.length) {
      console.error(
        `\u9519\u8BEF\uFF1A\u524D\u7AEF\u542F\u7528\u7684\u767B\u5F55\u65B9\u5F0F:${list.join("\uFF0C")};\u6CA1\u6709\u5728\u670D\u52A1\u7AEF\u5B8C\u6210\u914D\u7F6E\u3002\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF1A"/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json"`
      );
    }
  }
  const db = common_vendor.rn.database();
  db.on("error", onDBError);
  function onDBError({
    code,
    message
  }) {
    console.error("onDBError", {
      code,
      message
    });
  }
  if (common_vendor.rn.onRefreshToken) {
    common_vendor.rn.onRefreshToken(() => {
      console.log("onRefreshToken");
      if (common_vendor.index.getPushClientId) {
        common_vendor.index.getPushClientId({
          success: async function(e) {
            console.log(e);
            let pushClientId = e.cid;
            console.log(pushClientId);
            let res = await uniIdCo.setPushCid({
              pushClientId
            });
            console.log("getPushClientId", res);
          },
          fail(e) {
            console.log(e);
          }
        });
      }
    });
  }
}
exports.uniIdPageInit = uniIdPageInit;

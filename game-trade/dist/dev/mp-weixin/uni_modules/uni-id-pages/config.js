"use strict";
var config = {
  "debug": false,
  "isAdmin": false,
  "loginTypes": [
    "weixin",
    "username",
    "smsCode"
  ],
  "agreements": {
    "serviceUrl": "https://xxx",
    "privacyUrl": "https://xxx",
    "scope": [
      "register",
      "login"
    ]
  },
  "appid": {
    "weixin": {
      "h5": "xxxxxx",
      "web": "xxxxxx"
    }
  },
  "passwordStrength": "medium"
};
exports.config = config;

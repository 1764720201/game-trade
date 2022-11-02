"use strict";
var common_vendor = require("../common/vendor.js");
const useUser = common_vendor.defineStore({
  id: "user",
  state: () => ({
    userInfo: {},
    balance: 0
  }),
  actions: {
    async getUserInfo() {
      const db = common_vendor.pn.database();
      await db.collection("uni-id-users").where(`_id==$cloudEnv_uid`).field("_id,nickname,avatar_file,register_date,balance,phone").get({ getOne: true }).then((res) => {
        Object.assign(this.userInfo, res.result.data);
      }).catch(() => {
        common_vendor.index.navigateTo({
          url: "/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=weixin"
        });
      });
    },
    async getBalance() {
      const db = common_vendor.pn.database();
      await db.collection("balance").where(`user_id=='${this.userId}'`).get().then((res) => {
        this.balance = 0;
        res.result.data.forEach((item) => {
          this.balance += item.money;
        });
      });
    }
  },
  getters: {
    userId: (state) => {
      return state.userInfo._id;
    }
  }
});
exports.useUser = useUser;

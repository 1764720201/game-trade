"use strict";const t=require("../common/vendor.js").defineStore({id:"detail",state:()=>({detail:{},option:"游戏截图"}),actions:{async getDetail(t){Object.assign(this.detail,t)},async getCurrentOption(t){this.option=t}},getters:{}});exports.useDetail=t;

"use strict";
var store_user = require("./user.js");
var store_LeagueofLegend = require("./LeagueofLegend.js");
var store_GenshinImpact = require("./GenshinImpact.js");
var store_GloryOfTheKing = require("./GloryOfTheKing.js");
var store_detail = require("./detail.js");
function useStore() {
  return {
    user: store_user.useUser(),
    LeagueofLegend: store_LeagueofLegend.useLeagueofLegend(),
    GenshinImpact: store_GenshinImpact.useGenshinImpact(),
    detail: store_detail.useDetail(),
    GloryOfTheKing: store_GloryOfTheKing.useGloryOfTheKing()
  };
}
exports.useStore = useStore;

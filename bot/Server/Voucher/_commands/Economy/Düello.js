const { Client, Message } = require("discord.js");
const util = require("util");
const Game = require("../../../../Global/Plugins/Economy/_games/Fight");
const Discord = require("discord.js");
module.exports = {
  Isim: "düello",
  Komut: ["vs", "duello", "kapış"],
  Kullanim: "düello <@takachi/ID> <Miktar>",
  Aciklama: "24 Saatte bir belirli bir coin ödülü alırsınız.",
  Kategori: "eco",
  Extend: true,

  /**
   * @param {Client} client
   */
  onLoad: function (client) {},

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {Array<String>} args
   */

  onRequest: async function (client, message, args) {},
};

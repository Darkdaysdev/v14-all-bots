const { Message, EmbedBuilder } = require("discord.js");
const GUILDS_SETTINGS = require("../../../../Global/Databases/Schemas/Global.Guild.Settings");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const Discord = require("discord.js");
/**
 * @param {Message} message
 */

module.exports = async (message) => {
  // Sync Data's
  let Data = await GUILDS_SETTINGS.findOne({ _id: 1 });
  ayarlar =
    client._settings =
    global.ayarlar =
    global._settings =
    kanallar =
    client._channels =
    global.kanallar =
    global.channels =
    roller =
    client._roles =
    global.roller =
    global._roles =
      Data.Ayarlar;
  const adapter = new FileSync("../../Global/Settings/_emojis.json");
  const db = low(adapter);
  emojiler = client._emojis = global.emojiler = global._emojis = db.value();
  cevaplar =
    client._reply =
    global.cevaplar =
    global._reply =
      require("../../../../Global/Settings/_reply");
  // Sync Data's

  if (
    !global.sistem.botSettings.Prefixs.some((x) =>
      message.content.startsWith(x),
    ) ||
    !message.channel ||
    message.channel.type != 0
  )
    return;
  let args = message.content
    .substring(global.sistem.botSettings.Prefixs.some((x) => x.length))
    .split(" ");
  let komutcuklar = args[0].toLocaleLowerCase();
  let takachi = message.client;
  args = args.splice(1);
  let calistirici;

  if (takachi.commands.has(komutcuklar) || takachi.aliases.has(komutcuklar)) {
    if (
      !(
        ayarlar &&
        ayarlar.staff &&
        ayarlar.staff.includes(message.member.id)
      ) &&
      message.guild.ownerId != message.member.id &&
      client.user.id != message.member.id
    )
      return;
    calistirici =
      takachi.commands.get(komutcuklar) || takachi.aliases.get(komutcuklar);
    if (calistirici) calistirici.onRequest(takachi, message, args);
  }
};

module.exports.config = {
  Event: "messageCreate",
};

const { genEmbed } = require("../../../../Global/Init/Embed");
const getLimit = new Map();
const axios = require('axios')
const Discord = require("discord.js");
module.exports = {
  Isim: "veri",
  Komut: ["data", "analiz"],
  Kullanim: "kayıtsız <@takachi/ID> <Sebep>",
  Aciklama: "Belirlenen üyeyi kayıtsız üye olarak belirler.",
  Kategori: "teyit",
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

  onRequest: async function (client, message, args) {
    let uye =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (
        !roller.teyitciRolleri.some((oku) =>
          message.member.roles.cache.has(oku),
        ) &&
        !roller.üstYönetimRolleri.some((oku) =>
          message.member.roles.cache.has(oku),
        ) &&
        !roller.kurucuRolleri.some((oku) =>
          message.member.roles.cache.has(oku),
        ) &&
        !message.member.permissions.has(
          Discord.PermissionFlagsBits.Adminisrator,
        )
      )
        return message
          .reply(cevaplar.noyt)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      
        const response = await axios.get(`http://localhost:1555/api/user`, {
        params: { id: uye.id },
        auth: {
          username: "takachi",
          password: "1234",
        },
      });

      // Yanıt metnini konsola yazdır
      console.log("Response data:", response.data);

      if (!response.data) {
        //  throw new Error('Boş yanıt alındı.');
        message.reply({
          content: "Kullanıcının diğer bilgileri bulunamadı.",
        }).then(x => { setTimeout(() => { x.delete().catch((err) => {}) }, 5000) });
      };

      const data = response.data;

      if (!data || !data.base) {
        throw new Error("Geçersiz veri yapısı.");
      }

      const base = data.base;
      const guilds = data.guilds || [];

      const embed = new genEmbed().setDescription(
        `Aşağda kullanıcının diğer sunuculardaki verileri listelenmektedir, Listelenilen bilgiler: İsim, Yaş, Cinsiyet, Diğer Sunuculardaki kayıt verisi.`,
      );
      embed.sütun(`İsim:`, `**${base.topName || "Bilinmiyor"}**`, false);
      embed.sütun(`Yaş:`, `**${base.topAge || "Bilinmiyor"}**`, false);
      embed.sütun(`Cinsiyet:`, `**${base.gender || "Bilinmiyor"}**`, false);

      guilds.map((guild) => {
        embed.sütun(`${guild.serverName}`, `${guild.displayName}`, false);
      });
      message.reply({
        embeds: [embed],
      });
    }
}
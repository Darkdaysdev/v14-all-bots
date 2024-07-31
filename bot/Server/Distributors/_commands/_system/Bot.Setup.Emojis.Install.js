const { Client, Message } = require("discord.js");

module.exports = {
  Isim: "emojikur",
  Komut: ["emkur"],
  Kullanim: "",
  Aciklama: "",
  Kategori: "-",
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
    const emojis = [
      // Penal & Require
      {
        name: "Onay",
        url: "https://cdn.discordapp.com/emojis/817508162231205919.gif",
      },
      {
        name: "Iptal",
        url: "https://cdn.discordapp.com/emojis/817508163103227904.gif",
      },
      {
        name: "HosGif",
        url: "https://cdn.discordapp.com/emojis/817338914913910825.gif",
      },
      //{ name: "Tag", url: "https://cdn.discordapp.com/emojis/817508161895792670.gif" },
      {
        name: "Yasaklandi",
        url: "https://cdn.discordapp.com/emojis/817508162454159382.gif",
      },
      //{ name: "chatMute", url: "https://cdn.discordapp.com/attachments/907041238639861763/907559377853104128/chatMute.png"},
      //{ name: "unChatMute", url: "https://cdn.discordapp.com/attachments/907041238639861763/907559378792624158/unChatMute.png"},
      //{ name: "voiceMute", url: "https://cdn.discordapp.com/attachments/907041238639861763/907559381183365140/voiceMute.png" },
      {
        name: "Cezalandirildi",
        url: "https://cdn.discordapp.com/emojis/817508161447264267.png",
      },
      //{ name: "unVoiceMute", url: "https://cdn.discordapp.com/attachments/907041238639861763/907559382374551592/unVoiceMute.png" },
      {
        name: "erkek",
        url: "https://cdn.discordapp.com/emojis/842526029913260082.gif",
      },
      {
        name: "kadin",
        url: "https://cdn.discordapp.com/emojis/842526029184237568.gif",
      },
      {
        name: "uye",
        url: "https://cdn.discordapp.com/emojis/842526025216688158.png",
      },
      {
        name: "HosgeldinGif1",
        url: "https://cdn.discordapp.com/emojis/817338444635308042.gif",
      },
      {
        name: "HosgeldinGif2",
        url: "https://cdn.discordapp.com/emojis/817343543228104705.gif",
      },
      {
        name: "KonfetiGif",
        url: "https://cdn.discordapp.com/emojis/840597070812413962.gif",
      },
      {
        name: "Gold",
        url: "https://cdn.discordapp.com/emojis/838240527862333460.gif",
      },
      {
        name: "takachi",
        url: "https://cdn.discordapp.com/emojis/841032678266241054.gif",
      },
      {
        name: "rubyBit",
        url: "https://cdn.discordapp.com/emojis/780808227192963094.gif",
      },
      {
        name: "emeraldBit",
        url: "https://cdn.discordapp.com/emojis/780808253017686037.gif",
      },
      {
        name: "voiceDeaf",
        url: "https://cdn.discordapp.com/emojis/911967815651700796.png?size=44",
      },
      {
        name: "boostluNitro",
        url: "https://cdn.discordapp.com/emojis/834837377452474368.gif",
      },
      {
        name: "klasikNitro",
        url: "https://cdn.discordapp.com/emojis/834837383430012969.gif",
      },
      {
        name: "exxen",
        url: "https://cdn.discordapp.com/emojis/899301271985602600.png?size=44",
      },
      {
        name: "spotify",
        url: "https://cdn.discordapp.com/emojis/899301385110159431.png?size=44",
      },
      {
        name: "netflix",
        url: "https://cdn.discordapp.com/emojis/899301209150726185.png?size=44",
      },
      {
        name: "youtube",
        url: "https://cdn.discordapp.com/emojis/899301568564826133.gif?size=44",
      },
      {
        name: "bluetv",
        url: "https://cdn.discordapp.com/emojis/907344822187229234.png?size=96",
      },

      {
        name: "maviDegnek",
        url: "https://cdn.discordapp.com/emojis/843809647675834398.gif",
      },
      {
        name: "sariYildiz",
        url: "https://cdn.discordapp.com/emojis/909164076570116167.gif?size=44",
      },

      // UpStaff
      {
        name: "baslangicBar",
        url: "https://cdn.discordapp.com/emojis/826970314340433950.png",
      },
      {
        name: "baslamaBar",
        url: "https://cdn.discordapp.com/emojis/907344840587624548.gif?size=96",
      },
      {
        name: "doluBar",
        url: "https://cdn.discordapp.com/emojis/907344806525669407.gif?size=96",
      },
      {
        name: "doluBitisBar",
        url: "https://cdn.discordapp.com/emojis/907344808123695105.gif?size=96",
      },
      {
        name: "bosBar",
        url: "https://cdn.discordapp.com/emojis/817567181080494080.png",
      },
      {
        name: "bosBitisBar",
        url: "https://cdn.discordapp.com/emojis/817567181210517554.png",
      },
      {
        name: "icon",
        url: "https://cdn.discordapp.com/emojis/834984612622368818.gif",
      },
      {
        name: "miniicon",
        url: "https://cdn.discordapp.com/emojis/834986935880515614.png",
      },
      {
        name: "mavibas",
        url: "https://cdn.discordapp.com/emojis/1166539356253736990.gif",
      },
      {
        name: "maviorta",
        url: "https://cdn.discordapp.com/emojis/1166539357805609112.gif?size=96&quality=lossless",
      },
      {
        name: "mavison",
        url: "https://cdn.discordapp.com/emojis/1166539360167022603.gif?size=96&quality=lossless",
      },
      {
        name: "yesilbas",
        url: "https://cdn.discordapp.com/emojis/1166541233297031170.gif?size=96&quality=lossless",
      },
      {
        name: "yesilorta",
        url: "https://cdn.discordapp.com/emojis/971176312104427571.gif?size=96&quality=lossless",
      },
      {
        name: "yesilson",
        url: "https://cdn.discordapp.com/emojis/971176305334833194.gif?size=96&quality=lossless",
      },
      {
        name: "turkuazbas",
        url: "https://cdn.discordapp.com/emojis/1166539375312633896.gif?size=96&quality=lossless",
      },
      {
        name: "turkuazorta",
        url: "https://cdn.discordapp.com/emojis/1166539377770512417.gif?size=96&quality=lossless",
      },
      {
        name: "turkuazson",
        url: "https://cdn.discordapp.com/emojis/1166541206973583480.gif?size=96&quality=lossless",
      },
      {
        name: "redbas",
        url: "https://cdn.discordapp.com/emojis/1166539361957978222.gif?size=96&quality=lossless",
      },
      {
        name: "redorta",
        url: "https://cdn.discordapp.com/emojis/1166539363434381342.gif?size=96&quality=lossless",
      },
      {
        name: "redson",
        url: "https://cdn.discordapp.com/emojis/1166539365825126540.gif?size=96&quality=lossless",
      },
      {
        name: "saribas",
        url: "https://cdn.discordapp.com/emojis/1166263060189687848.gif?size=96&quality=lossless",
      },
      {
        name: "sariorta",
        url: "https://cdn.discordapp.com/emojis/1166263207590105159.gif?size=96&quality=lossless",
      },
      {
        name: "sarison",
        url: "https://cdn.discordapp.com/emojis/1166539372330496000.gif?size=96&quality=lossless",
      },
      {
        name: "a_rich",
        url: "https://cdn.discordapp.com/emojis/1100928500535414814.gif?size=44&quality=lossless",
      },
      // Task
      {
        name: "tamamlandi",
        url: "https://cdn.discordapp.com/emojis/844119157720481814.png",
      },
      {
        name: "sandik",
        url: "https://cdn.discordapp.com/emojis/844119157720481813.png",
      },
      {
        name: "para",
        url: "https://cdn.discordapp.com/emojis/844119157880258590.gif",
      },
      {
        name: "xp",
        url: "https://cdn.discordapp.com/emojis/844119157943042059.gif",
      },
      {
        name: "chating",
        url: "https://cdn.discordapp.com/emojis/844119158069526548.gif",
      },
      {
        name: "talking",
        url: "https://cdn.discordapp.com/emojis/844119158223536138.gif",
      },
      {
        name: "777",
        url: "https://cdn.discordapp.com/emojis/844120308897677342.gif",
      },
      {
        name: "kekcookie",
        url: "https://cdn.discordapp.com/emojis/844121947515519016.gif",
      },
      {
        name: "staff",
        url: "https://cdn.discordapp.com/emojis/848592182985752636.gif",
      },
      {
        name: "gift",
        url: "https://cdn.discordapp.com/emojis/826564060807299082.gif",
      },
      {
        name: "tagged",
        url: "https://cdn.discordapp.com/emojis/842563648597131304.gif",
      },
      {
        name: "sandikodul",
        url: "https://cdn.discordapp.com/emojis/907344860485386290.gif?size=96",
      },
      {
        name: "takachi_pat",
        url: "https://static.wikia.nocookie.net/owobot/images/5/56/SlotsEggplant.png/revision/latest/scale-to-width-down/18?cb=20201231080844",
      },
      {
        name: "takachi_heart",
        url: "https://static.wikia.nocookie.net/owobot/images/b/bb/SlotsHeart.png/revision/latest/scale-to-width-down/18?cb=20201231081114",
      },
      {
        name: "takachi_vis",
        url: "https://static.wikia.nocookie.net/owobot/images/8/80/SlotsCherry.png/revision/latest/scale-to-width-down/20?cb=20201231081252",
      },
      {
        name: "takachi_slot",
        url: "https://static.wikia.nocookie.net/owobot/images/f/f3/SlotsRolling.gif/revision/latest/scale-to-width-down/18?cb=20201231075644",
      },
      {
        name: "takachi_cf",
        url: "https://cdn.discordapp.com/emojis/932325559051096084.gif?size=44&quality=lossless",
      },
      {
        name: "takachi_cfwin",
        url: "https://cdn.discordapp.com/emojis/932326782223417455.png",
      },
      {
        name: "takachi_cflose",
        url: "https://cdn.discordapp.com/emojis/932328417196671026.webp?size=44&quality=lossless",
      },
    ];

    const numEmojis = [
      {
        name: "sifir",
        url: "https://cdn.discordapp.com/emojis/804121295875866645.gif?size=96",
      },
      {
        name: "bir",
        url: "https://cdn.discordapp.com/emojis/804121340818096158.gif?size=96",
      },
      {
        name: "iki",
        url: "https://cdn.discordapp.com/emojis/804121379183656990.gif?size=96",
      },
      {
        name: "uc",
        url: "https://cdn.discordapp.com/emojis/804121470997495828.gif?size=96",
      },
      {
        name: "dort",
        url: "https://cdn.discordapp.com/emojis/804122294644506634.gif?size=96",
      },
      {
        name: "bes",
        url: "https://cdn.discordapp.com/emojis/804122311732625409.gif?size=96",
      },
      {
        name: "alti",
        url: "https://cdn.discordapp.com/emojis/804122334117101599.gif?size=96",
      },
      {
        name: "yedi",
        url: "https://cdn.discordapp.com/emojis/804122378929176586.gif?size=96",
      },
      {
        name: "sekiz",
        url: "https://cdn.discordapp.com/emojis/804122401956560906.gif?size=96",
      },
      {
        name: "dokuz",
        url: "https://cdn.discordapp.com/emojis/804122434068414474.gif?size=96",
      },
    ];

    emojis.forEach(async (x) => {
      if (message.guild.emojis.cache.find((e) => x.name === e.name)) return;
      const emoji = await message.guild.emojis.create({
        name: x.name,
        attachment: x.url
      });
      message.channel.send(
        `\`${x.name}\` isimli emoji oluşturuldu! (${emoji.toString()})`,
      );
    });
    numEmojis.forEach(async (x) => {
      if (message.guild.emojis.cache.find((e) => x.name === e.name)) return;
      const emoji = await message.guild.emojis.create({
        name: x.name,
        attachment: x.url
      });
      message.channel.send(
        `\`${x.name}\` isimli emoji oluşturuldu! (${emoji.toString()})`,
      );
    });
  },
};

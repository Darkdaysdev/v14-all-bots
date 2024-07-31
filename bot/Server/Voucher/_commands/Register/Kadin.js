const {
  Client,
  Message,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const Users = require("../../../../Global/Databases/Schemas/Client.Users");
const Punitives = require("../../../../Global/Databases/Schemas/Global.Punitives");
const { genEmbed } = require("../../../../Global/Init/Embed");
const Discord = require("discord.js");
const axios = require("axios");
module.exports = {
  Isim: "k",
  Komut: ["kadin", "kadın", "ka", "kayıt", "kayit"],
  Kullanim: "kadın @takachi/ID <isim/nick>",
  Aciklama:
    "Belirtilen üye sunucuda kayıtsız bir üye ise kayıt etmek için kullanılır.",
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
    if (ayarlar.dugmeliKayit) {
      let regPanelEmbed = new genEmbed();
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
      if (!uye)
        return message
          .reply(cevaplar.üye)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      let uyarısıVar = await Punitives.findOne({
        Member: uye.id,
        Type: "Uyarılma",
      });
      if (message.author.id === uye.id)
        return message.reply(cevaplar.kendi).then((x) => {
          setTimeout(() => {
            x.delete();
          }, 5000);
        });
      if (uye.user.bot)
        return message
          .reply(cevaplar.bot)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      if (!uye.manageable)
        return message.reply(cevaplar.dokunulmaz).then((x) => {
          setTimeout(() => {
            x.delete().catch((err) => {});
          }, 5000);
        });
      if (roller.erkekRolleri.some((x) => uye.roles.cache.has(x)))
        return message
          .reply(cevaplar.kayıtlı)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      if (roller.kadınRolleri.some((x) => uye.roles.cache.has(x)))
        return message
          .reply(cevaplar.kayıtlı)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      if (message.member.roles.highest.position <= uye.roles.highest.position)
        return message.reply(cevaplar.yetkiust).then((x) => {
          setTimeout(() => {
            x.delete().catch((err) => {});
          }, 5000);
        });
      if (
        ayarlar.taglıalım &&
        ayarlar.taglıalım != false &&
        !uye.user.globalName.includes(ayarlar.tag) &&
        !uye.roles.cache.has(roller.boosterRolü) &&
        !uye.roles.cache.has(roller.vipRolü) &&
        !message.member.permissions.has(
          Discord.PermissionFlagsBits.Adminisrator,
        ) &&
        !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
      )
        return message.reply(cevaplar.taglıalım).then((x) => {
          setTimeout(() => {
            x.delete().catch((err) => {});
          }, 5000);
        });
      if (
        ayarlar.teyitZorunlu &&
        !uye.voice.channel &&
        !uye.roles.cache.has(roller.boosterRolü) &&
        !uye.roles.cache.has(roller.vipRolü) &&
        !message.member.permissions.has(
          Discord.PermissionFlagsBits.Adminisrator,
        ) &&
        !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
      )
        return message
          .reply({
            embeds: [
              new genEmbed().setDescription(
                `${message.guild.emojiGöster(emojiler.Iptal)} **${ayarlar.serverName}** sunucusunda **Ses Teyit** zorunluluğu bulunduğundan dolayı ${uye} isimli üyenin kayıt işlemi \`${tarihsel(Date.now())}\` tarihinde iptal edildi.`,
              ),
            ],
          })
          .then((x) => {
            message
              .react(
                message.guild.emojiGöster(emojiler.Iptal)
                  ? message.guild.emojiGöster(emojiler.Iptal).id
                  : undefined,
              )
              .catch((err) => {});
            setTimeout(() => {
              x.delete().catch((err) => {});
            }, 15000);
          });
      if (
        Date.now() - uye.user.createdTimestamp < 1000 * 60 * 60 * 24 * 7 &&
        !message.member.permissions.has(
          Discord.PermissionFlagsBits.Adminisrator,
        ) &&
        !roller.kurucuRolleri.some((oku) =>
          message.member.roles.cache.has(oku),
        ) &&
        !roller.üstYönetimRolleri.some((oku) =>
          message.member.roles.cache.has(oku),
        )
      )
        return message.reply(cevaplar.yenihesap).then((x) => {
          setTimeout(() => {
            x.delete();
          }, 5000);
        });
      if (
        uye.roles.cache.has(roller.şüpheliRolü) &&
        uye.roles.cache.has(roller.jailRolü) &&
        uye.roles.cache.has(roller.underworldRolü) &&
        uye.roles.cache.has(roller.yasaklıTagRolü) &&
        !message.member.permissions.has(
          Discord.PermissionFlagsBits.Adminisrator,
        ) &&
        !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
      )
        return message
          .reply(cevaplar.cezaliüye)
          .then((x) => x.delete({ timeout: 5000 }));
      args = args.filter((a) => a !== "" && a !== " ").splice(1);
      let setName;
      let isim = args
        .filter((arg) => isNaN(arg))
        .map(
          (arg) => arg.charAt(0).replace("i", "İ").toUpperCase() + arg.slice(1),
        )
        .join(" ");
      if (!isim)
        return message
          .reply(cevaplar.argümandoldur)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      let yaş = args.filter((arg) => !isNaN(arg))[0] || undefined;
      if (ayarlar.isimyas && !yaş)
        return message
          .reply(cevaplar.argümandoldur)
          .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
      if (ayarlar.isimyas && yaş < ayarlar.minYaş)
        return message.reply(cevaplar.yetersizyaş).then((x) => {
          setTimeout(() => {
            x.delete();
          }, 5000);
        });
      if (ayarlar.isimyas) {
        setName = `${isim} | ${yaş}`;
      } else {
        setName = `${isim}`;
      }
      let cezaPuanı = await uye.cezaPuan();
      if (
        cezaPuanı >= 100 &&
        !message.member.permissions.has(
          Discord.PermissionFlagsBits.Adminisrator,
        ) &&
        roller.sorunÇözmeciler &&
        !roller.sorunÇözmeciler.some((x) =>
          message.member.roles.cache.has(x),
        ) &&
        !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
      )
        return message
          .reply({
            embeds: [
              new genEmbed()
                .setDescription(`Belirlenen ${uye} isimli üyenin ceza puanı 100'ün üzerinde olduğu için kayıt işlemi alınamıyor. 
    Bir itirazınız var ise ${
      roller.sorunÇözmeciler
        ? roller.sorunÇözmeciler
            .filter((x) => message.guild.roles.cache.has(x))
            .map((x) => message.guild.roles.cache.get(x))
            .join(", ")
        : roller.altYönetimRolleri
            .filter((x) => message.guild.roles.cache.has(x))
            .map((x) => message.guild.roles.cache.get(x))
            .join(", ")
    } rolü ve üstündeki rollerden herhangi bir yetkiliye ulaşınız ve durumu onlara da anlatınız.`),
            ],
          })
          .then((x) => {
            message
              .react(
                message.guild.emojiGöster(emojiler.Iptal)
                  ? message.guild.emojiGöster(emojiler.Iptal).id
                  : undefined,
              )
              .catch((err) => {});
            setTimeout(() => {
              x.delete().catch((err) => {});
            }, 15000);
          });
      if (uyarısıVar) {
        regPanelEmbed.setDescription(`${uye} (\`${setName}\`) isimli üyenin, birden fazla cezası veya uyarısı bulunmakta kontrol ediniz ve daha sonra kayıt işlemini tamamlanabilmesi için, lütfen aşağıda ki düğmelerden cinsiyetini seçiniz.
            
    Bu kayıt işlemine \`30 Saniye\` içerisinde tepki vermezseniz, işlem otomatik olarak iptal edilir.`);
      } else {
        regPanelEmbed.setDescription(`${uye} (\`${setName}\`) isimli üyenin kayıt işlemini tamamlanabilmesi için, lütfen aşağıda ki düğmelerden cinsiyetini seçiniz.
            
    Bu kayıt işlemine \`30 Saniye\` içerisinde tepki vermezseniz, işlem otomatik olarak iptal edilir.`);
      }
      const genderSelect = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("erkekyaxd")
          .setLabel("Erkek")
          .setStyle(ButtonStyle.Secondary),
        //.setEmoji(message.guild.emojiGöster(emojiler.erkekTepkiID).id),
        new ButtonBuilder()
          .setCustomId("lesbienaq")
          .setLabel("Kadın")
          .setStyle(ButtonStyle.Secondary),
        //.setEmoji(message.guild.emojiGöster(emojiler.kadınTepkiID).id),
        new ButtonBuilder()
          .setCustomId("digerswbilgiler")
          .setLabel("Kullanıcının diğer verileri")
          .setStyle(ButtonStyle.Primary),
        //.setEmoji(message.guild.emojiGöster(emojiler.Görev.OK).id)
        new ButtonBuilder()
          .setCustomId("iptal")
          .setLabel("İptal")
          .setStyle(ButtonStyle.Danger),
        //.setEmoji(message.guild.emojiGöster(emojiler.Iptal).id),
      );
      const filter = (i) => i.user.id === message.member.id;
      let regPanel = await message.reply({
        embeds: [regPanelEmbed],
        components: [genderSelect],
        ephemeral: true,
      });
      const collector = regPanel.createMessageComponentCollector({
        filter,
        time: 15000,
      });

      collector.on("collect", async (i) => {
        if (i.customId === "erkekyaxd") {
          await regPanel
            .edit({
              embeds: [
                new genEmbed().setDescription(
                  `${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye} isimli üye **Erkek** olarak kayıt edildi.`,
                ),
              ],
              components: [],
            })
            .then((x) => {
              setTimeout(() => {
                x.delete();
              }, 10000);
            });
          uye
            .setNickname(
              `${ayarlar.type ? (uye.user.globalName.includes(ayarlar.tag) ? ayarlar.tag + " " : ayarlar.tagsiz ? ayarlar.tagsiz + " " : ayarlar.tag || "") : ``}${setName}`,
            )
            .catch((err) => message.reply(cevaplar.isimapi));
          uye.Register(`${setName}`, "Erkek", message.member);
          client.Upstaffs.addPoint(
            message.member.id,
            _statSystem.points.record,
            "Kayıt",
          );
          message.react(
            message.guild.emojiGöster(emojiler.Onay)
              ? message.guild.emojiGöster(emojiler.Onay).id
              : undefined,
          );
        }

        if (i.customId === "digerswbilgiler") {
          //await i.deferReply({ "ephemeral": true, "fetchReply": true });

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
            i.reply({
              content: "Kullanıcının diğer bilgileri bulunamadı.",
              ephemeral: true,
            });
          }

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
          i.reply({
            embeds: [embed],
            ephemeral: true,
          });
        }

        if (i.customId === "lesbienaq") {
          await regPanel
            .edit({
              embeds: [
                new genEmbed().setDescription(
                  `${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye} isimli üye **Kadın** olarak kayıt edildi.`,
                ),
              ],
              components: [],
            })
            .then((x) => {
              setTimeout(() => {
                x.delete();
              }, 10000);
            });
          uye
            .setNickname(
              `${ayarlar.type ? (uye.user.globalName.includes(ayarlar.tag) ? ayarlar.tag + " " : ayarlar.tagsiz ? ayarlar.tagsiz + " " : ayarlar.tag || "") : ``}${setName}`,
            )
            .catch((err) => message.reply(cevaplar.isimapi));
          uye.Register(`${setName}`, "Kadın", message.member);
          client.Upstaffs.addPoint(
            message.member.id,
            _statSystem.points.record,
            "Kayıt",
          );
          message.react(
            message.guild.emojiGöster(emojiler.Onay)
              ? message.guild.emojiGöster(emojiler.Onay).id
              : undefined,
          );
        }
        if (i.customId === "iptal") {
          await i.deferUpdate();
          regPanel.delete().catch((err) => {});
          message
            .react(
              message.guild.emojiGöster(emojiler.Iptal)
                ? message.guild.emojiGöster(emojiler.Iptal).id
                : undefined,
            )
            .catch((err) => {});
        }
      });
      collector.on("end", (collected) => {});
      return;
    }
    let regPanelEmbed = new genEmbed();
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
      !message.member.permissions.has(Discord.PermissionFlagsBits.Adminisrator)
    )
      return message
        .reply(cevaplar.noyt)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    if (!uye)
      return message
        .reply(cevaplar.üye)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    let uyarısıVar = await Punitives.findOne({
      Member: uye.id,
      Type: "Uyarılma",
    });
    if (message.author.id === uye.id)
      return message.reply(cevaplar.kendi).then((x) => {
        setTimeout(() => {
          x.delete();
        }, 5000);
      });
    if (uye.user.bot)
      return message
        .reply(cevaplar.bot)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    if (!uye.manageable)
      return message.reply(cevaplar.dokunulmaz).then((x) => {
        setTimeout(() => {
          x.delete().catch((err) => {});
        }, 5000);
      });
    if (roller.erkekRolleri.some((x) => uye.roles.cache.has(x)))
      return message
        .reply(cevaplar.kayıtlı)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    if (roller.kadınRolleri.some((x) => uye.roles.cache.has(x)))
      return message
        .reply(cevaplar.kayıtlı)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    if (message.member.roles.highest.position <= uye.roles.highest.position)
      return message.reply(cevaplar.yetkiust).then((x) => {
        setTimeout(() => {
          x.delete().catch((err) => {});
        }, 5000);
      });
    if (
      ayarlar.taglıalım &&
      ayarlar.taglıalım != false &&
      !uye.user.globalName.includes(ayarlar.tag) &&
      !uye.roles.cache.has(roller.boosterRolü) &&
      !uye.roles.cache.has(roller.vipRolü) &&
      !message.member.permissions.has(
        Discord.PermissionFlagsBits.Adminisrator,
      ) &&
      !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
    )
      return message.reply(cevaplar.taglıalım).then((x) => {
        setTimeout(() => {
          x.delete().catch((err) => {});
        }, 5000);
      });
    if (
      ayarlar.teyitZorunlu &&
      !uye.voice.channel &&
      !uye.roles.cache.has(roller.boosterRolü) &&
      !uye.roles.cache.has(roller.vipRolü) &&
      !message.member.permissions.has(
        Discord.PermissionFlagsBits.Adminisrator,
      ) &&
      !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
    )
      return message
        .reply({
          embeds: [
            new genEmbed().setDescription(
              `${message.guild.emojiGöster(emojiler.Iptal)} **${ayarlar.serverName}** sunucusunda **Ses Teyit** zorunluluğu bulunduğundan dolayı ${uye} isimli üyenin kayıt işlemi \`${tarihsel(Date.now())}\` tarihinde iptal edildi.`,
            ),
          ],
        })
        .then((x) => {
          message
            .react(
              message.guild.emojiGöster(emojiler.Iptal)
                ? message.guild.emojiGöster(emojiler.Iptal).id
                : undefined,
            )
            .catch((err) => {});
          setTimeout(() => {
            x.delete().catch((err) => {});
          }, 15000);
        });
    if (
      Date.now() - uye.user.createdTimestamp < 1000 * 60 * 60 * 24 * 7 &&
      !message.member.permissions.has(
        Discord.PermissionFlagsBits.Adminisrator,
      ) &&
      !roller.kurucuRolleri.some((oku) =>
        message.member.roles.cache.has(oku),
      ) &&
      !roller.üstYönetimRolleri.some((oku) =>
        message.member.roles.cache.has(oku),
      )
    )
      return message.reply(cevaplar.yenihesap).then((x) => {
        setTimeout(() => {
          x.delete();
        }, 5000);
      });
    if (
      uye.roles.cache.has(roller.şüpheliRolü) &&
      uye.roles.cache.has(roller.jailRolü) &&
      uye.roles.cache.has(roller.underworldRolü) &&
      uye.roles.cache.has(roller.yasaklıTagRolü) &&
      !message.member.permissions.has(
        Discord.PermissionFlagsBits.Adminisrator,
      ) &&
      !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
    )
      return message
        .reply(cevaplar.cezaliüye)
        .then((x) => x.delete({ timeout: 5000 }));
    args = args.filter((a) => a !== "" && a !== " ").splice(1);
    let setName;
    let isim = args
      .filter((arg) => isNaN(arg))
      .map(
        (arg) => arg.charAt(0).replace("i", "İ").toUpperCase() + arg.slice(1),
      )
      .join(" ");
    if (!isim)
      return message
        .reply(cevaplar.argümandoldur)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    let yaş = args.filter((arg) => !isNaN(arg))[0] || undefined;
    if (ayarlar.isimyas && !yaş)
      return message
        .reply(cevaplar.argümandoldur)
        .then((s) => setTimeout(() => s.delete().catch((err) => {}), 5000));
    if (ayarlar.isimyas && yaş < ayarlar.minYaş)
      return message.reply(cevaplar.yetersizyaş).then((x) => {
        setTimeout(() => {
          x.delete();
        }, 5000);
      });
    if (ayarlar.isimyas) {
      setName = `${isim} | ${yaş}`;
    } else {
      setName = `${isim}`;
    }
    let cezaPuanı = await uye.cezaPuan();
    if (
      cezaPuanı >= 100 &&
      !message.member.permissions.has(
        Discord.PermissionFlagsBits.Adminisrator,
      ) &&
      roller.sorunÇözmeciler &&
      !roller.sorunÇözmeciler.some((x) => message.member.roles.cache.has(x)) &&
      !roller.kurucuRolleri.some((oku) => message.member.roles.cache.has(oku))
    )
      return message
        .reply({
          embeds: [
            new genEmbed()
              .setDescription(`Belirlenen ${uye} isimli üyenin ceza puanı 100'ün üzerinde olduğu için kayıt işlemi alınamıyor. 
Bir itirazınız var ise ${
              roller.sorunÇözmeciler
                ? roller.sorunÇözmeciler
                    .filter((x) => message.guild.roles.cache.has(x))
                    .map((x) => message.guild.roles.cache.get(x))
                    .join(", ")
                : roller.altYönetimRolleri
                    .filter((x) => message.guild.roles.cache.has(x))
                    .map((x) => message.guild.roles.cache.get(x))
                    .join(", ")
            } rolü ve üstündeki rollerden herhangi bir yetkiliye ulaşınız ve durumu onlara da anlatınız.`),
          ],
        })
        .then((x) => {
          message
            .react(
              message.guild.emojiGöster(emojiler.Iptal)
                ? message.guild.emojiGöster(emojiler.Iptal).id
                : undefined,
            )
            .catch((err) => {});
          setTimeout(() => {
            x.delete().catch((err) => {});
          }, 15000);
        });
    await message
      .reply({
        embeds: [
          new genEmbed().setDescription(
            `${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye} isimli üye **Kadın** olarak kayıt edildi.`,
          ),
        ],
        components: [],
      })
      .then((x) => {
        setTimeout(() => {
          x.delete();
        }, 10000);
      });
    uye
      .setNickname(
        `${ayarlar.type ? (uye.user.globalName.includes(ayarlar.tag) ? ayarlar.tag + " " : ayarlar.tagsiz ? ayarlar.tagsiz + " " : ayarlar.tag || "") : ``}${setName}`,
      )
      .catch((err) => message.reply(cevaplar.isimapi));
    uye.Register(`${setName}`, "Kadın", message.member);
    client.Upstaffs.addPoint(
      message.member.id,
      _statSystem.points.record,
      "Kayıt",
    );
    message.react(
      message.guild.emojiGöster(emojiler.Onay)
        ? message.guild.emojiGöster(emojiler.Onay).id
        : undefined,
    );
  },
};

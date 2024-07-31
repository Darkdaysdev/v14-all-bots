const { Client, User, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, GuildMember } = require("discord.js");
const Users = require("../../../../Global/Databases/Schemas/Client.Users");
const Settings = require("../../../../Global/Databases/Schemas/Global.Guild.Settings");
const { genEmbed } = require("../../../../Global/Init/Embed");
const GUILD_SETTINGS = require("../../../../Global/Databases/Schemas/Global.Guild.Settings");
const USERS_COMPONENTS = require("../../../../Global/Databases/Schemas/Users.Components");

/**
 * 
 * @param {User} oldUser 
 * @param {User} newUser 
 * @returns 
 */

module.exports = async (oldUser, newUser) => {
  console.log('Event triggered');

  let Row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("onukap")
      .setLabel("İlgilen!")
      .setEmoji("925128103741775892")
      .setStyle(ButtonStyle.Secondary),
  );

  const _findServer = await Settings.findOne({ guildID: sistem.SERVER.ID });
  if (!_findServer) {
    console.error('Server settings not found');
    return;
  }

  const ayarlar = global.ayarlar = _findServer.Ayarlar;
  const roller = global.roller = _findServer.Ayarlar;
  const kanallar = global.kanallar = _findServer.Ayarlar;
  const client = oldUser.client;
  const guild = client.guilds.cache.get(sistem.SERVER.ID);
  if (!guild) {
    console.error('Guild not found');
    return;
  }

  const user = guild.members.cache.get(oldUser.id);
  if (!user) {
    console.error('User not found in guild');
    return;
  }
  
  const UserData = await Users.findOne({ _id: user.id });
  if (!UserData) {
    console.error('User data not found');
    return;
  }

  const embed = new genEmbed();
  const oldGlobalName = oldUser.globalName;
  const newGlobalName = newUser.globalName;
  if(!oldGlobalName) return;
  if(!newGlobalName) return;
  if (oldGlobalName === newGlobalName || oldUser.bot || newUser.bot) return;

  console.log('Checking for prohibited tags');
  if (ayarlar.yasakTaglar && ayarlar.yasakTaglar.some(tag => newGlobalName.includes(tag)) && roller.yasaklıTagRolü && !user.roles.cache.has(roller.yasaklıTagRolü)) {
    user.roles.set([roller.yasaklıTagRolü]);
    user.send(`**${user.guild.name}** sunucumuzun yasaklı taglarından birini kullanıcı adına aldığın için jaile atıldın! Tagı geri bıraktığında jailden çıkacaksın.`);
    const kanalYasak = guild.channels.cache.find(channel => channel.name === "yasaklı-tag-log");
    if (kanalYasak) {
      kanalYasak.send({
        embeds: [embed.setDescription(`${user} adlı üye ismine <t:${String(Date.now()).slice(0, 10)}:R> yasaklı tag aldığı için jaile atıldı.`)],
      });
    }
    return;
  }

  console.log('Checking for removal of prohibited tags');
  if (ayarlar.yasakTaglar && !ayarlar.yasakTaglar.some(tag => newGlobalName.includes(tag)) && roller.yasaklıTagRolü && user.roles.cache.has(roller.yasaklıTagRolü)) {
    user.send(`**${user.guild.name}** sunucumuzun yasaklı taglarından birine sahip olduğun için cezalıdaydın ve şimdi bu yasaklı tagı çıkardığın için cezalıdan çıkarıldın!`).catch(() => {});
    const yasakKanal = guild.channels.cache.find(channel => channel.name === "yasaklı-tag-log");
    if (yasakKanal) {
      yasakKanal.send({
        embeds: [embed.setDescription(`${user} adlı üye ismine <t:${String(Date.now()).slice(0, 10)}:R> yasaklı tagı çıkarttığı için cezalıdan çıkartıldı!`).setColor("Green")],
      });
    }
    if (!ayarlar.taglıalım && UserData && UserData.Name && UserData.Names && UserData.Gender) {
      if (user.manageable) await user.setNickname(`${UserData.Name}`);
      if (UserData.Gender === "Erkek") await user.roles.set(roller.erkekRolleri);
      if (UserData.Gender === "Kadın") await user.roles.set(roller.kadınRolleri);
      if (UserData.Gender === "Kayıtsız") user.roles.set(roller.kayıtsızRolleri);
    } else {
      user.roles.set(roller.kayıtsızRolleri);
      if (user.manageable) await user.setNickname(`Kayıtsız`);
    }
  }

  console.log('Checking for staff prohibited tags');
  if (ayarlar.yetkiliYasaklıTag && ayarlar.yetkiliYasaklıTag.filter(x => x != ayarlar.tag).some(tag => newGlobalName.includes(tag))) {
    const data = await Users.findOne({ _id: user.id });
    if (data && data.Staff) {
      user.removeStaff();
      const yetkiliRol = guild.roles.cache.get(roller.altilkyetki);
      await user.roles.remove(user.roles.cache.filter(rol => yetkiliRol.position <= rol.position && rol.id != roller.boosterRolü)).catch(() => {});
    }
  }

  console.log('Checking for adding tag role');
  if (ayarlar.type && newGlobalName.includes(ayarlar.tag) && !user.roles.cache.has(roller.tagRolü)) {
    const addTagLog = guild.channels.cache.find(channel => channel.name === "tag-log");
    if (addTagLog) {
      addTagLog.send({
        embeds: [embed.setDescription(`${user} üyesi ismine **\` ${ayarlar.tag} \`** sembolünü <t:${String(Date.now()).slice(0, 10)}:R> aldı ve <@&${roller.tagRolü}> ailemize katıldı!`).setColor("Green")],
      });
    }
    if (user.manageable) user.setNickname(user.displayName.replace(ayarlar.tagsiz, ayarlar.tag));
    if (roller.jailRolü && user.roles.cache.has(roller.jailRolü)) return;
    if (roller.yasaklıTagRolü && user.roles.cache.has(roller.yasaklıTagRolü)) return;
    if (roller.underworldRolü && user.roles.cache.has(roller.underworldRolü)) return;
    await GUILD_SETTINGS.updateOne({ guildID: guild.id }, { $set: { [`Caches.lastTagged`]: user.id } }, { upsert: true });
    user.roles.add(roller.tagRolü).catch(() => {});
  } else if (ayarlar.type && !newGlobalName.includes(ayarlar.tag) && user.roles.cache.has(roller.tagRolü)) {
    const removeTagLog = guild.channels.cache.find(channel => channel.name === "tag-log");
    if (removeTagLog) {
      removeTagLog.send({
        embeds: [embed.setDescription(`${user} üyesi isminden **\` ${ayarlar.tag} \`** sembolünü <t:${String(Date.now()).slice(0, 10)}:R> kaldırdı ve <@&${roller.tagRolü}> ailemizden ayrıldı!\nAnlık olarak üzerinden <@&${roller.altilkyetki}> üzerinde ki tüm roller kaldırıldı..`).setColor("Red")],
        components: [Row],
      }).then((msg) => {
        const collector = msg.createMessageComponentCollector({ max: 1 });
        collector.on("collect", async (i) => {
          const kapan = user.guild.members.cache.get(i.user.id);
          if (kapan) {
            Row.components[0].setDisabled(true);
            Row.components[0].setLabel(`${kapan.user.username}`);
            Row.components[0].setStyle(ButtonStyle.Success);
            msg.edit({ components: [Row] });
            user.send(`Merhaba! ${user}\nSunucumuzda tag bıraktığınız için çok üzgünüz. Neden bıraktığınızı bilmiyoruz bizlere belirtmek ister misiniz?\nO zaman bana ${kapan} (${kapan.user.username} | ${kapan.id}) yazarsanız derdinize deva olabiliriz.`).then(() => {
              i.reply({ content: `Başarıyla ${user} üyesine tagı bıraktığı için DM üzerinden mesaj ile bildirildi. Yine de sen yazmak ister misin?`, ephemeral: true });
            }).catch(async () => {
              removeTagLog.send(`Merhaba! ${kapan},\nKapmaya çalıştığınız üyenin **DM** kapalı olduğu için ben mesaj gönderemedim. Arkadaş ekleyip sen atmak ister misin?`);
              await i.deferUpdate().catch(() => {});
            });
            kapan.Leaders("tag", 5.0, { type: "TAG_CHECK", user: user.id });
            await USERS_COMPONENTS.updateOne({ _id: kapan.id }, { $push: { Checks: { target: user.id, date: Date.now(), type: "TAG" } } }, { upsert: true });
          }
        });
      });
    }
    if (user.manageable) user.setNickname(user.displayName.replace(ayarlar.tag, ayarlar.tagsiz));
    user.roles.remove(roller.tagRolü).catch(() => {});
  }
};

module.exports.config = {
  Event: Events.UserUpdate,
};

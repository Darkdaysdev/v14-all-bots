const { Client, Message, Guild, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, PermissionFlagsBits } = require("discord.js");
const { genEmbed } = require("../../../../Global/Init/Embed");

module.exports = {
    Isim: "say",
    Komut: ["istatistik"],
    Kullanim: "say",
    Aciklama: "Sunucunun bütün verilerini gösterir",
    Kategori: "yönetim",
    Extend: true,
    /**
     * @param {Client} client 
     */
    onLoad: function (client) {
        // Initialization logic if any
    },
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<String>} args 
     * @param {Guild} guild
     */
    onRequest: async function (client, message, args, guild) {
        try {
            let taglı = message.guild.members.cache.filter(u => u.user.globalName && u.user.globalName.includes(ayarlar.tag)).size;

            if (!roller.üstYönetimRolleri.some(oku => message.member.roles.cache.has(oku)) &&
                !roller.altYönetimRolleri.some(oku => message.member.roles.cache.has(oku)) &&
                !roller.yönetimRolleri.some(oku => message.member.roles.cache.has(oku)) &&
                !roller.kurucuRolleri.some(oku => message.member.roles.cache.has(oku)) &&
                !message.member.permissions.has('Administrator')) {
                return message.reply(cevaplar.noyt).then(s => setTimeout(() => s.delete().catch(err => {}), 5000));
            }

            const onayEmoji = message.guild.emojiGöster(emojiler.Onay);
            message.react(onayEmoji ? onayEmoji.id : undefined);

            const memberCount = message.guild.memberCount;
            const activeMembers = message.guild.members.cache.filter(m => m.presence && m.presence.status !== "offline").size;
            const boosterRole = message.guild.roles.cache.get(roller.boosterRolü);
            const boosters = boosterRole ? boosterRole.members.size : 0;
            const voiceChannels = message.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildVoice && channel.members.size > 0); // Filtreleme eklendi
            const voiceMembers = voiceChannels.reduce((acc, channel) => acc + channel.members.size, 0);
            const botVoiceMembers = message.guild.members.cache.filter(x => x.user.bot && x.voice.channel).size;

            let Aloo = [];
            let altyetkiler = message.guild.roles.cache.get(roller.altilkyetki);
            if (altyetkiler) {
                altyetkiler.members
                    .filter(
                        (uye) =>
                            !uye.user.bot &&
                            !uye.permissions.has(PermissionFlagsBits.Administrator) &&
                            !uye.roles.cache.has(roller.kurucuRolleri),
                    )
                    .forEach((uye) => {
                        if (!Aloo.includes(uye.id)) Aloo.push(uye.id);
                    });
            }

            [roller.altYönetimRolleri, roller.yönetimRolleri, roller.üstYönetimRolleri, roller.kurucuRolleri].forEach(rolGroup => {
                rolGroup.forEach((x) => {
                    let rol = message.guild.roles.cache.get(x);
                    if (rol) {
                        rol.members
                            .filter(
                                (uye) =>
                                    !uye.user.bot &&
                                    !uye.permissions.has(PermissionFlagsBits.Administrator) &&
                                    !uye.roles.cache.has(roller.kurucuRolleri),
                            )
                            .forEach((uye) => {
                                if (!Aloo.includes(uye.id)) Aloo.push(uye.id);
                            });
                    }
                });
            });

            const voiceStats = voiceChannels.reduce((acc, channel) => {
                const category = channel.parent ? channel.parent.name : "Other";
                const members = channel.members.size;
                const staffCount = channel.members.filter(member => Aloo.includes(member.id)).size;

                if (!acc[category]) {
                    acc[category] = {
                        totalMembers: 0,
                        totalStaff: 0,
                        channels: []
                    };
                }
                acc[category].totalMembers += members;
                acc[category].totalStaff += staffCount;
                acc[category].channels.push({ name: channel.name, members, staffCount });

                return acc;
            }, {});

            const sortedCategories = Object.keys(voiceStats).sort((a, b) => voiceStats[b].totalMembers - voiceStats[a].totalMembers);

            const embed = new genEmbed()
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`${message.guild.emojiGöster(emojiler.Tag)} Sunucumuzda **${global.sayılıEmoji(memberCount)}** üye bulunmakta. ${ayarlar.type ? `\n${message.guild.emojiGöster(emojiler.Tag)} Sunucumuzda **${global.sayılıEmoji(taglı)}** taglı üye bulunmakta.` : ``}
                ${message.guild.emojiGöster(emojiler.Tag)} Sunucumuzda **${global.sayılıEmoji(activeMembers)}** aktif üye bulunmakta.
                ${message.guild.emojiGöster(emojiler.Tag)} Sunucumuzu boostlayan **${global.sayılıEmoji(boosters)}** üye bulunmakta.
                ${message.guild.emojiGöster(emojiler.Tag)} Ses kanallarında **${global.sayılıEmoji(voiceMembers)}** (\`+${botVoiceMembers} Bot\`) üye bulunmakta.`);

            const mesaj = await message.channel.send({
                embeds: [embed], components: [
                    new ActionRowBuilder({
                        components: [
                            new ButtonBuilder({
                                custom_id: "sesverileri",
                                emoji: message.guild.emojiGöster(emojiler.Tag).id,
                                style: ButtonStyle.Secondary,
                                label: "Sunucudaki genel ses verileri",
                            })
                        ]
                    })
                ]
            });

            const filtre = (i) => i.user.id === message.author.id;
            const xxx = await mesaj.createMessageComponentCollector({
                componentType: ComponentType.Button,
                filter: filtre
            });

            xxx.on('collect', async (interaction) => {
                if (interaction.customId === "sesverileri") {
                    const embed2 = new genEmbed()
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setDescription(`Aşağıda sunucudaki toplam ses verisi listelenmektedir. **${voiceMembers}** üye seslide aktif durumda. %${((Aloo.length / voiceMembers) * 100).toFixed(2)} yetkili seste aktif. (toplam **${Aloo.length}** yetkili.)`);

                    sortedCategories.forEach(category => {
                        const { totalMembers, totalStaff, channels } = voiceStats[category];
                        const staffPercentage = ((totalStaff / totalMembers) * 100).toFixed(2);
                        embed2.addFields({
                            name: `**${category}** (${totalMembers} kullanıcı)`,
                            value: channels.map(channel => `- ${channel.name}: ${channel.members} kullanıcı (%${((channel.staffCount / channel.members) * 100).toFixed(2)} Yetkili)`).join('\n'),
                            inline: false
                        });
                    });
                    await interaction.reply({ embeds: [embed2], ephemeral: true });
                }
            });

        } catch (error) {
            console.error('Error executing the say command:', error);
            message.channel.send('Bir hata oluştu, lütfen daha sonra tekrar deneyin.');
        }
    }
};

const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!'; // Botunuzun ön ekini burada ayarlayabilirsiniz

client.once('ready', () => {
    console.log('Bot çalışıyor!');
});

const button1Id = 'buton1'; // Buton 1'in customId değeri
const button2Id = 'buton2'; // Buton 2'nin customId değeri
const button3Id = 'buton3'; // Buton 3'ün customId değeri
const roleId1 = '1130070376668463235'; // Buton 1 ile verilecek/alınacak rolün ID'si
const roleId2 = '1130070431286693959'; // Buton 2 ile verilecek/alınacak rolün ID'si
const roleId3 = '1130070284905484398'; // Buton 3 ile verilecek/alınacak rolün ID'si
const roleAlreadyHas = 'Bu role zaten sahipsiniz!';
const roleAdded = 'Rol başarıyla verildi: ';
const roleRemoved = 'Rol başarıyla alındı: ';
const roleNotFound = 'Rol bulunamadı!';

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'butonmesaj') {
        const embed = new MessageEmbed()
            .setColor('#000000')
            .setDescription('# **Nostge Team**\n Sizlerde Önemli anlarda anında bildirim alarak gelişmelerden haberdar olmak istiyorsanız hemen alta bulunan butonlar ile istediğin rolü al ve her andan haberdar ol! Butona bastığınız anda rolünüz otomatik verilecektir.')
            .setFooter('Nostge.com - Rol verme sistemi');

        const button1 = new MessageButton()
            .setCustomId(button1Id)
            .setLabel('Yama Notları')
            .setStyle('SECONDARY') 
            .setEmoji('<:nostge:1113537166610538596>');

        const button2 = new MessageButton()
            .setCustomId(button2Id)
            .setLabel('Developer')
            .setStyle('SECONDARY') 
            .setEmoji('<:activedeveloper:1130128451865682052>');

        const button3 = new MessageButton()
            .setCustomId(button3Id)
            .setLabel('Çekiliş Duyuru')
            .setStyle('SECONDARY') 
            .setEmoji('<a:cekilis:1130128736084316311>');

        const row = new MessageActionRow()
            .addComponents(button1, button2, button3);

        message.channel.send({ embeds: [embed], components: [row] });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    const member = interaction.member;

    if (interaction.customId === button1Id) {
        const role1 = member.guild.roles.cache.get(roleId1);

        if (!role1) {
            return interaction.reply({ content: roleNotFound, ephemeral: true });
        }

        if (member.roles.cache.has(role1.id)) {
            member.roles.remove(role1)
                .then(() => {
                    interaction.reply({ content: `${roleRemoved}${role1.name}`, ephemeral: true });
                })
                .catch(err => {
                    console.error('Rol alma hatası:', err);
                    interaction.reply({ content: 'Rol alırken bir hata oluştu!', ephemeral: true });
                });
        } else {
            member.roles.add(role1)
                .then(() => {
                    interaction.reply({ content: `${roleAdded}${role1.name}`, ephemeral: true });
                })
                .catch(err => {
                    console.error('Rol verme hatası:', err);
                    interaction.reply({ content: 'Rol verirken bir hata oluştu!', ephemeral: true });
                });
        }
    } else if (interaction.customId === button2Id) {
        const role2 = member.guild.roles.cache.get(roleId2);

        if (!role2) {
            return interaction.reply({ content: roleNotFound, ephemeral: true });
        }

        if (member.roles.cache.has(role2.id)) {
            member.roles.remove(role2)
                .then(() => {
                    interaction.reply({ content: `${roleRemoved}${role2.name}`, ephemeral: true });
                })
                .catch(err => {
                    console.error('Rol alma hatası:', err);
                    interaction.reply({ content: 'Rol alırken bir hata oluştu!', ephemeral: true });
                });
        } else {
            member.roles.add(role2)
                .then(() => {
                    interaction.reply({ content: `${roleAdded}${role2.name}`, ephemeral: true });
                })
                .catch(err => {
                    console.error('Rol verme hatası:', err);
                    interaction.reply({ content: 'Rol verirken bir hata oluştu!', ephemeral: true });
                });
        }
    } else if (interaction.customId === button3Id) {
        const role3 = member.guild.roles.cache.get(roleId3);

        if (!role3) {
            return interaction.reply({ content: roleNotFound, ephemeral: true });
        }

        if (member.roles.cache.has(role3.id)) {
            member.roles.remove(role3)
                .then(() => {
                    interaction.reply({ content: `${roleRemoved}${role3.name}`, ephemeral: true });
                })
                .catch(err => {
                    console.error('Rol alma hatası:', err);
                    interaction.reply({ content: 'Rol alırken bir hata oluştu!', ephemeral: true });
                });
        } else {
            member.roles.add(role3)
                .then(() => {
                    interaction.reply({ content: `${roleAdded}${role3.name}`, ephemeral: true });
                })
                .catch(err => {
                    console.error('Rol verme hatası:', err);
                    interaction.reply({ content: 'Rol verirken bir hata oluştu!', ephemeral: true });
                });
        }
    }
});

client.login("MTEzMDA2ODk0ODU0OTkwMjM5Nw.G3VEt0.tVrw7b0yHm2c6RQ6nYTzH-2wG9zS7LRp0hi_yc");

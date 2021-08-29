const Discord = require("discord.js");


module.exports = async (bot, member) => {
    let avatar = member.user.avatarURL({ format: "png", dynamic: true });
    let channel = member.guild.channels.cache.find(channel => channel.name === '🚪-porta')
    //
    const embed = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setTitle(`Bem-vindo!`)
    .setDescription(`**${member} acabou de entrar no servidor!**`)
    .setFooter(member.guild.name)
    .setTimestamp()
    .setThumbnail(avatar)
    channel.send(embed);



};
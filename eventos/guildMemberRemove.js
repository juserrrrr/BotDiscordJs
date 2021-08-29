const Discord = require("discord.js");


module.exports = async (bot, member) => {
    let avatar = member.user.avatarURL({ format: "png", dynamic: true });
    let channel = member.guild.channels.cache.find(channel => channel.name === '🚪-porta')
    //
    const embed = new Discord.MessageEmbed()
    .setColor('#FFFF00')
    .setTitle(`Foi de beise!`)
    .setDescription(`**${member} acabou de sair do servidor!**`)
    .setFooter(member.guild.name)
    .setTimestamp()
    .setThumbnail(avatar)
    channel.send(embed);



};
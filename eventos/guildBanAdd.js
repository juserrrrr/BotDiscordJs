const Discord = require("discord.js");


module.exports = async  (user, guild, member) => {
   //let avatar = member.user.displayAvatarURL();
    let channel = guild.channels.cache.find(channel => channel.name === '🚪-porta')
    //
    const embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`BANIDO`)
    .setDescription(`**Já foi tarde ${member}**`)
    .setFooter(guild.name)
    .setTimestamp()
    //.setThumbnail(avatar)
    channel.send(embed);
};
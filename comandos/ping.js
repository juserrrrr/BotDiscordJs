const Discord = require ("discord.js");
const execute = (bot, msg,args) => {
    msg.delete()
    const embed = new Discord.MessageEmbed()
    .setColor('#00BFFF')
    .setTitle(`O PING DO BOT É DE: ${new Date() - msg.createdAt}ms`)
    .setDescription(`Não é um valor exato!`)
    .setTimestamp()
    msg.channel.send(embed);
}
module.exports = {
    name:"ping",
    help: "Mostra o ping do bot.",
    execute,
}
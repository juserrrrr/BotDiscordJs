const Discord = require ("discord.js");
const {prefix} = require("../config.json")
const execute = (bot, msg, args) => {
    let string = "";
    bot.commands.forEach(command =>{
        if(command.help) {
            string += `**${prefix}${command.name}**: ${command.help}\n`
        }
    });
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`BotTeamBahia - Comandos.`)
    .setDescription(`${string}`)
    .setThumbnail(`https://i.imgur.com/7pi4xOA.png`);
    msg.channel.send(embed);
};

module.exports = {
    name: "ajuda",
    help: "Mostra todos os comandos do bot!",
    execute,
};
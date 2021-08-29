const Discord = require ("discord.js");
const {prefix, token} = require ("../config.json");
const execute = (bot, msg, args) => {
    let sey = (prefix);
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`TeamBahia`)
    .setDescription(`Prazer, eu sou o Bot do TeamBahia!
    Caso queira ajuda , basta digitar:`)
    .addField(`${sey}ajuda`,`Mostra comandos úteis. `,true)
    .setThumbnail(`https://i.imgur.com/7pi4xOA.png`);
    msg.channel.send(embed);
    }
    module.exports = {
        name:"prazer",
        help: "O bot se apresenta.",
        execute,
    }

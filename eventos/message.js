const Discord = require ("discord.js");
const bot = new Discord.Client();
const {prefix, token} = require ("../config.json");
const fs = require("fs");
const cooldowns = new Discord.Collection();
bot.commands = new Discord.Collection
bot.queues = new Map();;

module.exports = async(bot, msg, member, voice) => {
	//Para ler o comando e executar.
    if(msg.channel.type === "dm") return;
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!bot.commands.has(commandName)) return;
	const command = bot.commands.get(commandName);
	//---------------------Caso o comando esteja sendo usado de forma incorreta!-----------------------------
	if (command.args && !args.length) {
	let reply = `Comando utilizado de maneira errada!`;
	if (command.usage) {
	reply += `\nForma correta de utilizar o comando: \`${prefix}${command.name} ${command.usage}\``;
	}
	return msg.channel.send(reply);
	}
//---------------------------------------------------------------------
	try {
		command.execute(bot, msg, args);
	  } catch (error) {
		  console.error(error);
		  msg.reply('Ocorreu um erro ao tentar executar esse comando!');
	  }
};
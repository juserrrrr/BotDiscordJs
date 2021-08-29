const Discord = require ("discord.js");
const bot = new Discord.Client();
const {prefix, token} = require ("./config.json");
const fs = require("fs");
bot.commands = new Discord.Collection
bot.queues = new Map();
//Carregar arquivos de eventos na pasta!
const eventfiles = fs.readdirSync(`./eventos/`)
console.log(`Carregado um total de ${eventfiles.length} eventos`)
eventfiles.forEach(f => {
    const eventname = f.split(`.`)[0]
    const event = require(`./eventos/${f}`)
    bot.on(eventname, event.bind(null, bot));
    })
//
const commandsfiles = fs.readdirSync(`./comandos`)
console.log(`Carregado um total de ${commandsfiles.length} comandos`)
commandsfiles.forEach(f => {
    const commandsname = f.split(`.`)[0]
    const command = require(`./comandos/${f}`)
    bot.commands.set(commandsname, command);
})

bot.login(token);
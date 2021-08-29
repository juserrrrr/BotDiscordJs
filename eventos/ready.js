module.exports = async (bot, msg) => {
    console.log(`O BOT ${bot.user.username} foi iniciado, com ${bot.users.cache.size} usuários, em ${bot.channels.cache.size} canais, em ${bot.guilds.cache.size} servidores.`);
    bot.user.setPresence({ activity: {name: `ze#4458`}, status: `online`});
};
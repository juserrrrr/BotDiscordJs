const Discord = require ("discord.js");

const execute = (bot, msg, args) => {
    if (args.length >= 1 && !args.shift().toLowerCase().startsWith('<'))
    return msg.channel.send('Você precisa mencionar algum usário. !avatar @user ou !avatar para o seu próprio avatar.')
    let membro = msg.mentions.users.first() || bot.commands.get(args[0]) || msg.author
    let avatar = membro.displayAvatarURL({ format: "png", dynamic: true })
    const embed = new Discord.MessageEmbed()
    .setColor('#00BFFF')
    .setTitle(membro.username)
    .setDescription(`Avatar:`)
    .setImage(membro.displayAvatarURL({ format: "png", dynamic: true }))
    msg.channel.send(embed)
}
module.exports = {
    name: "avatar",
    help: "(!avatar) para obter o seu avatar ou (!avatar @user) para obter de algum outro usuário",
    execute,
};
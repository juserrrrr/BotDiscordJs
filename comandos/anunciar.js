const Discord = require ("discord.js");
    const execute = async (bot,msg, args) => {
    const sayMessage = args.join(" ");
    msg.delete().catch(m => {});
    const embed = new Discord.MessageEmbed()
    .setColor('#00BFFF')
    .setTitle(`ATENÇÃO!`)
    .setDescription(`${sayMessage}`)
    .setFooter(msg.author.tag, msg.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setThumbnail(msg.guild.iconURL({ format: "png", dynamic: true }))
    .setTimestamp()
    msg.channel.send(`@everyone`)
    msg.channel.send(embed);
  }
  module.exports = {
    name: "anunciar",
    help: "Anuncia o que você fala após o comando e manda para todos(Everyone).",
    args: true,
    usage:'[TEXTO]',
    execute
}
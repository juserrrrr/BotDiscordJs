const Discord = require ("discord.js");

const execute = async(bot, msg, args, member) => {
    //Constantes
    const {guild, channel} = msg
    let servidor = msg.guild
    let membro = msg.mentions.users.first() || bot.commands.get(args[0]) || msg.author
    let membroo = guild.members.cache.get(membro.id)
    let memb = guild.members.cache.get(msg.author.id)
    let cargo = servidor.roles.cache.get("785650374195019806")

    msg.delete({ timeout: 0})
    
    // Verificar se tem o cargo correto.
    let rolesdomembro = memb.roles.cache
    if(!rolesdomembro.has(`811429810315984898`))
    return msg.channel.send("Você não tem permissão para executar esse comando!").then( mm => mm.delete({ timeout: 3000}));

    //Verificar se mencionou um usuario.
    else if (args.length < 1 ) 
    return msg.channel.send(`Você precisa mencionar algum usuário.`).then( mm => mm.delete({ timeout: 3000}));

    //Verificar se ele usou o @ ao mencionar
    else if (args.length >= 1 && !args.shift().toLowerCase().startsWith('<'))
    return msg.channel.send('Você precisa mencionar algum usuário(Usando o @ antes).').then( mm => mm.delete({ timeout: 3000}));

    //Verificar se o usuario já foi registrado
    else if(membroo.roles.cache.has(cargo.id) || membroo.roles.cache.has(`785650860125978635`) || membroo.roles.cache.has(`785650413134938113`) ) 
    return msg.channel.send("Este usuário já está registrado.").then( mm => mm.delete({ timeout: 3000}));;

    //Registrar o usuario.
    try{
        await membroo.roles.add(cargo)
        const m = await msg.channel.send("Registrado com sucesso!").then( mm => mm.delete({ timeout: 3000}));
    } catch(err){}
}
module.exports = {
    name: "registrar",
    help: "Registra um usuário no servidor",
    execute,
};

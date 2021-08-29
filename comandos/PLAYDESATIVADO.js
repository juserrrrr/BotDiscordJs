const search = require("yt-search");
const ytdl = require("ytdl-core-discord");
const execute = async(bot, msg, args) => {
    if(!msg.member.voice.channel)
    return msg.channel.send (
        "Você precisa estar em um canal de voz para tocar uma música!"
    );
    const s = args.join(" ");
        search(s, (err, result) => {
            if(err) {
                throw err;
            } else if(result && result.videos.length > 0) {
                    const song = result.videos[0];
                    playSong(bot,msg,song)
                }
            }
        );
const playSong =async(bot, msg, song) => {
    if(!song) {
    }
    if(!msg.member.voice.channel) {
        return msg.reply(
            "Você precisa estar em um canal de voz para reproduzir uma música!"
            )
    }
    let queue = bot.queues.get(msg.member.guild.id);
if(!queue) {
    const conn = await msg.member.voice.channel.join();
    queue = {
        volume: 10,
        connection: conn,
        dispatcher: null,
        songs:[song],
    };
    console.log(queue)
    queue.dispatcher = await queue.connection.play(await ytdl(song.url, {
        type:"opus",
    }));
    bot.queues.set(msg.member.guild.id, queue)
}
}
}
module.exports = {
    name: "p",
    help: "Comando para executar uma música",
    execute,
};

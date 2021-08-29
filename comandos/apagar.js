const execute =(bot, msg, args) => {
		const amount = parseInt(args[0]) + 1;
		if (isNaN(amount)) {
			return msg.reply('Somente números por favor.');
		} else if (amount <= 1 || amount > 100) {
			return msg.reply('você pode apagar um número maximo de 99 mensagens.');
		}
		msg.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			msg.channel.send('Verifique se as mensagens que está tentando apagar não tenha mais que 2 semanas.');
		});
	}
module.exports = {
	name: 'apagar',
	help: "Apaga todas as mensagens anteriores a está(até 99 mensanges).",
	description: 'Apaga até 99 mensagens.',
	execute
}
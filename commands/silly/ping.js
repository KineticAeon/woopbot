module.exports = {
	name: 'ping',
	description: 'pings piain, for whatever reason',
	aliases: ['piain', 'piai'],
	execute(message) {
		message.channel.send('<@419615772684582912>');
	},
};
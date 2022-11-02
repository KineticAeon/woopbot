// I need help
module.exports = {
	name: 'ready',
	once: true,
	execute(message, client) {
		console.log(`the wooper is ready, logged into ${client.user.tag}`);
	},
};
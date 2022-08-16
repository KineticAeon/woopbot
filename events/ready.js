module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`the wooper is ready, logged into ${client.user.tag}`);
	},
};
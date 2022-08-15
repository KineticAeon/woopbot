module.exports = {
	name: '8ball',
	description: 'replies with cryptic ass answers',
	execute(message) {
		// require fetch
		const fetch = require('node-fetch');

		// fetch function gets text from responseFile
		async function getResponses(responseFile) {
			try {
			const responses = await fetch(responseFile);
			const textData = await responses.text();
			return textData;
			} catch (err) {
				console.log('fetch error', err);
			}
		};

		// gets promise
		let ballResponses = getResponses('https://raw.githubusercontent.com/KineticAeon/furry-meme/main/8ballResponses');

		// ]sets ballResponses as the result of getResponses
		ballResponses.then(function(result) {
			ballResponses = result;
			// splits into an array
			ballResponses = ballResponses.split("\n");
			// gets random answer from array
			finalResponse = ballResponses[Math.random()*ballResponses.length>>0];
			message.channel.send(finalResponse);
		});
	},
};
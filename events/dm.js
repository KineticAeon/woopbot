// require dotenv
const dotenv = require('dotenv');
dotenv.config();

// set dmChannel to the specified channel in the .env file
const dmChannel = process.env.DMCHANNEL;

module.exports = {
	name: 'dm',
	execute(message, client) {
        // checks if channel type is a dm
        if (message.channel.type === 'dm') {
            // sends message to the specified channel
            client.channels.cache.get(dmChannel).send(`${message.author.tag}: ${message.content}`);
        };
	},
};
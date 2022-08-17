// require dotenv
const dotenv = require('dotenv');
dotenv.config();

// get prefix
const prefix = process.env.PREFIX;

module.exports = {
	name: 'say',
	description: 'makes the bot send your message',
	execute(message, args) {
        // makes sure the message actually has arguments
        if (!args.length) {
            message.channel.send('that\'s not how that works silly')
        } else {
            // delete sent message
            message.delete();
            // remove prefix from sent message
            toSay = args.join(" ");
            message.channel.send(toSay);};
	},
};
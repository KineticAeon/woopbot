// looks a bit janky, will switch to a nicer embed style later
const dotenv = require('dotenv');
dotenv.config();

// set prefix to env variables
const prefix = process.env.PREFIX;

module.exports = {
	name: 'help',
	description: 'list commands, or get help with a specific one',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('here\'s a list of my commands');
	data.push(commands.map(command => command.name).join(', '));
	data.push(`\nyou can use \`${prefix}help [command name]\` for command-specific info`);

	return message.author.send(data, { split: true })
		.then(() => {
			if (message.channel.type === 'dm') return;
			message.channel.send('I sent you a dm with a list of my commands');
		})
		.catch(error => {
			console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
			message.reply('I can\'t dm you, you might have dm\'s disabled');
		});
		}

        const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.channel.send('that\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true });
	},
};
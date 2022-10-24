// requirements
const fs = require('fs');
const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

// set prefix and token to env variables
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

// commands
const client = new Discord.Client();
client.commands = new Discord.Collection();

// implement cooldowns
client.cooldowns = new Discord.Collection();

// load events folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// gets all events
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

// load commands folder and subfolders
const commandFolders = fs.readdirSync('./commands');

// searches for commands
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('message', message => {

// command handler
if (message.content.startsWith(prefix)) {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();


	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	// make sure server only commands don't work in dms
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.channel.send('you can\'t use this command in dm\'s, silly');
	}

	// perms check, or as I call it, the vibe check
	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.channel.send(`${message.author} has failed the vibe check`);
		}
	}

	// if a user forgets arguments
	if (command.args && !args.length) {
		let reply = `that's not how \`${command.name}\` works`;
	
		return message.channel.send(reply);
	}

	// cooldowns
	const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			return message.channel.send(`chill, you're using \`${command.name}\` way too much`);
		}
	}

	// error reporter
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('error');
	}
}
});

client.login(token);
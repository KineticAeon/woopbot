module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
	guildOnly: true,
    permissions: 'KICK_MEMBERS',
    aliases: ['gtfo', 'out'],
	execute(message) {
        const member = message.mentions.members.first();
        // check if a user is mentioned
        if (message.mentions.members.size > 0) {
            // check if the target is kickable and kick them if they are
            if(member.kickable) {
                member.kick();
                message.channel.send(`${member} (\`${member}\`) has been kicked`);
            } else {
                // if unkickable, sends this message
                return message.channel.send(`I'm not cool enough to kick ${member}`);
            };
        } else {
            // send a message if no user is mentioned
            message.channel.send('you have to mention someone');
        };
    },
};
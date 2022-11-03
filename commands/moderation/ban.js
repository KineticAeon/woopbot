module.exports = {
	name: 'ban',
	description: 'bans a user',
	guildOnly: true,
    permissions: 'BAN_MEMBERS',
    aliases: ['bam', 'bean', 'barn', 'execute', 'murder'],
	execute(message) {
        const member = message.mentions.members.first();

        // check if a user is mentioned
        if (message.mentions.members.size > 0) {

            // check if the target is bannable and ban them if they are
            if(member.bannable) {
                member.ban();
                message.channel.send(`${member} (\`${member}\`) no longer exists`);
            } else {

                // if unbannable, sends this message
                return message.channel.send(`I'm not cool enough to ban ${member}`);
            };
            
        } else {
            // send a message if no user is mentioned
            message.channel.send('you have to mention someone');
        };
    },
};
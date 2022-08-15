// as of yet I have been unable to check if a user exists, so '~kick gshfdnt' will always output error
// this will be fixed eventually, idk when
module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
	guildOnly: true,
    permissions: 'KICK_MEMBERS',
	execute(message, args) {
        // checks to make sure arguments are added
        if (!args.length) {
            message.channel.send('you just tried to kick air lmao')
        } else {
            // checks if the target exists in the server
            const target = message.mentions.targets.first();
            if (message.mentions.members.size){
                // checks if the target is kickable
                client.guild.member(target.id).exists
                if(target.kickable) {
                    target.kick();
                    message.channel.send(`\`${target}\` has been kicked`)
                } else {
                    // if unkickable, sends this message
                    return message.channel.send(`I'm not cool enough to kick ${target}`);
                }
            } else {
                message.channel.send(`${target} ain't even here man`)
            }
        };
	},
};
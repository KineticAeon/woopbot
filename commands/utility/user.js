const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'gets a user\'s avatar and other information',
    args: true,
    aliases: ['info', 'usr', 'whois'],
	execute(message) {
        if (message.mentions.members.size > 0) {
            const member = message.mentions.members.first();
            const userEmbed = new Discord.MessageEmbed()
            .setColor('#3d75f7')
            .setTitle(member.user.tag)
            .setThumbnail("https://cdn.discordapp.com/avatars/"+member.id+"/"+member.user.avatar+".jpeg?size=4096")
            .addFields(
            { name: 'ID', value: member.id },
            { name: 'Account Creation Date', value: member.user.createdAt }
            )
            .setTimestamp()
            .setFooter('I\'m watching you');

            message.channel.send(userEmbed);
        } else {
            message.channel.send('that\'s not how you do that')
        };
	},
};
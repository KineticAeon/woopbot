module.exports = {
	name: 'message',
	execute(message) {

        // sets content variable
        var content = message.content;

        // changes all text to lower case
        var stringToCheck = content;
        content = stringToCheck.replace(/\s+/g, '').toLowerCase();

        if (content.includes('engineer')) {  
            message.channel.send('<:engeer:1008530218237051041>\nlittle man with a shotgun\nlittle man with a shotgun');
        };
	},
};
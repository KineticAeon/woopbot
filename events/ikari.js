module.exports = {
    name: 'message',
    execute(message) {
        // make sure the bot isn't replying to itself or other bots
        if (!message.author.bot) {
            var content = message.content;

            // REGEX OWNS ME I LOVE REGEX PLEASE HELP ME
            content = content.replace(/\s+/g, '').toLowerCase();

            // send hm emoji
            if (content.includes(':hm:')) {
                message.channel.send('<:hm:1011461406505324555>');
                // react with hm emoji when hm is said
            } else if (content.includes('hm')) {
                message.react('1011461406505324555')
            };
        };
    },
};
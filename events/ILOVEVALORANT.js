// 中国政府拥有我 I LOVE VALORANT 请救救我
// THE CHINESE GOVERNMENT OWNS ME I LOVE VALORANT PLEASE HELP
module.exports = {
    name: 'message',
    execute(message) {
        // botn't
        if (!message.author.bot) {
            var content = message.content;

            content = content.replace(/\s+/g, '').toLowerCase();
            if (content.includes('ilovevalorant')) message.channel.send('中国政府拥有我 I LOVE VALORANT 请救救我');
        };
    },
};
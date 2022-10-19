module.exports = {
    name: 'purge',
    guildOnly: true,
    permissions: 'MANAGE_MESSAGES',
    aliases: ['censor', '1984'],
    execute(message, args) {
        // parses the message and grabs an integer from the arguments
        const messageNum = parseInt(args[0]);

        // sends funny messages if you mess up
        if (!messageNum) message.channel.send('CENSORSHIP ALERT, THIS SERVER IS 1984 CERTIFIED');
        if (messageNum > 100 || messageNum < 1) message.channel.send('are you trying to waste my time?');
        
        // THE PURGE + error catch in case the messages are older than 14 days
        message.channel.bulkDelete(messageNum).catch(err => {
            message.channel.send('command fail, laugh at this user') });
    },
};
module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.reference != null) {
            if (message.content.includes('hm this')) {
                message.channel.messages.fetch(message.reference.messageId).then((reactMessage) => {
                    reactMessage.react("1011461406505324555");
                })
                }
            }
        }
    }
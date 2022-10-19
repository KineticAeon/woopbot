// TODO add database shit
module.exports = {
    name: 'ddlc',
    description: 'discord discord literature club',
    guildOnly: true,
    aliases: 'match, marry',
    execute(message, args) {
        // marry function
        function marry(groom, bride) {
            return (parseInt(groom) + parseInt(bride)) / (10 ** (groom.length));
        }
        // makes sure arguments are specified
        if (!args[0]) {
            message.channel.send('air does not have the ability to marry things')
        } else if (!message.author.bot) {
            if (args[1]) {
                // I love regex
                let user1 = args[0].replace(/\D/g, "")
                let user2 = args[1].replace(/\D/g, "")

                // increase string length to make length equal
                while (user2.length < user1.length) {
                    user2 = user2 + '0'
                }
                while (user1.length < user2.length) {
                    user1 = user1 + '0'
                }

                // marries if chance is high enough
                if (marry(user1, user2) > 0.5) message.channel.send(`${args[0]} and ${args[1]} are a perfect match`)
                if (marry(user1, user2) < 0.5) message.channel.send(`${args[0]} and ${args[1]} would have a divorce`)

            }
        }
    },
}
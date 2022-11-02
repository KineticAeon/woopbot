// 中国政府拥有我 I LOVE VALORANT 请救救我
// THE CHINESE GOVERNMENT OWNS ME I LOVE VALORANT PLEASE HELP
module.exports = {
    name: 'presenceUpdate',
    execute(oldPresence, newPresence, client) {

        let channelID = 1032389840777510912
        // shames the players for playing val
        function shameValPlayer(user) {
            client.channels.cache.get(channelID).send(`<@${user}> 中国政府拥有我 I LOVE VALORANT 请救救我`)
        }

        // checks if a users presence has updated
        if (Object.keys(newPresence.activities).length !== 0) {
            // sets activityName
            // REGEX OWNS ME I LOVE REGEX PLEASE HELP
            let activityName = newPresence.activities[0].name.replace(/\s+/g, '').toLowerCase();
            let user = newPresence.userId
            if (activityName.includes('valorant')) shameValPlayer(user);
        }
    },
};
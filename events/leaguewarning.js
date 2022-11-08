module.exports = {
    name: 'presenceUpdate',
    execute(oldPresence, newPresence, client) {

        let channelID = '984322369273344050'
        let channelID2 = '103959822629279070'
        // shames the players for playing league
        function shameLeaguePlayer(user) {
            client.channels.cache.get(channelID).send(`<@${user}> should stop playing league and touch grass`)
            client.channels.cache.get(channelID2).send(`<@${user}> should stop playing league and touch grass`)
        }

        // checks if a users presence has updated
        if (Object.keys(newPresence.activities).length !== 0) {
            // sets activityName
            let activityName = newPresence.activities[0].name.replace(/\s+/g, '').toLowerCase();
            let user = newPresence.userId
                if (activityName.includes('leagueoflegends')) shameLeaguePlayer(user);

        }
    },
};
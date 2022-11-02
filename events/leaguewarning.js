module.exports = {
    name: 'presenceUpdate',
    execute(oldPresence, newPresence, client) {

        let channelID = '827647182747598903'
        // shames the players for playing league
        function shameLeaguePlayer(user) {
            client.channels.cache.get(channelID).send(`<@${user}> should stop playing league and touch grass`)
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
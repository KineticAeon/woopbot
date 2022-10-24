module.exports = {
    name: 'presenceUpdate',
    execute(oldPresence, newPresence, client) {

        let channelID = 1032389840777510912
        // shames the players for playing league
        function shameLeaguePlayer(user) {
            client.channels.cache.get(channelID).send(`<@${user}> should stop playing league and touch grass`)
        }

        // checks if a users presence has updated
        if (Object.keys(newPresence.activities).length != 0) {
            // sets activityName
            let activityName = newPresence.activities[0].name.replace(/\s+/g, '').toLowerCase();
            let user = newPresence.userID

            // this code snippet doesn't work yet
            // can't figure out how to check again after 30 minutes
            /*
            let leagueTime = newPresence.activities[0].createdAt
            let currentTime = new Date()
            if (leagueTime + 1800000 >= currentTime) {
                if (activityName.includes('leagueoflegends')) shameLeaguePlayer(user);
            }
            */
        }
    },
};
module.exports = {
	name: 'image',
	description: 'sends an image',
    execute(message) {
	
	// import github listing library
	const listContent = require('list-github-dir-content');
	// import dotenv
	const dotenv = require('dotenv');
	dotenv.config();

	// easier token usage
	const gitToken = process.env.GITTOKEN;

	// set raw github repo
	const repo = 'https://raw.githubusercontent.com/KineticAeon/furry-meme/main/'

	// create async function to get files using repoDir as the directory
	async function getFiles(repoDir) {
        // returns array of files in repoDir
		return await listContent.viaTreesApi({
			user: 'KineticAeon',
			repository: 'furry-meme',
			directory: repoDir,
			token: gitToken
		});
	}

        // retrive promis
        getFiles('images').then(function(result) {
            // sets image to actual array
            // get random image from array and do text manipulation
            image = repo + result[Math.random()*result.length>>0].replace(/ /g, '%20');
            // finally, send the message
            message.channel.send(image);
        });
	},
};
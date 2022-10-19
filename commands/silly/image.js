module.exports = {
	name: 'image',
	description: 'sends an image',s
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
		const filesArray = await listContent.viaTreesApi({
			user: 'KineticAeon',
			repository: 'furry-meme',
			directory: repoDir,
			token: gitToken
		});
		// returns array of files in repoDir
		return filesArray;
	};

	// retrieves promise
	let images = getFiles('images');


	images.then(function(result) {
		// sets image to actual array
		imageArray = result;
		// gets a random part of the array and change image to it
		image = imageArray[Math.random()*imageArray.length>>0];
		// logs random output
		// replace spaces with %20
		image = image.replace(/ /g, '%20');
		// add storage repo link to image
		image = repo + image;
		// finally, send the message
		message.channel.send(image);
	});
	},
};
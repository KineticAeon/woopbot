// haah: the name is really just funny
// try and guess what I use this one for

const dotenv = require('dotenv');
dotenv.config();

const extImage = process.env.EXTIMAGE;

module.exports = {
	name: 'haah',
	description: 'external image command to grab images from a file and send them in specific channels',
	execute(message) {
		// require fetch
		const fetch = require('node-fetch');

        if (message.channel.nsfw) {
		// fetch function image urls from imageFile
            async function getResponses(imageFile) {
                try {
                const responses = await fetch(imageFile);
                const textData = await responses.text();
                return textData;
                } catch (err) {
                    console.log('fetch error', err);
                }
            };
            let extImages = getResponses(extImage);
            // sets extImages to content of external image file and turns it to an array
            extImages.then(function(result) {
                extImages = result;
                extImages = extImages.split("\n");
                // does the randomize
                let haah = extImages[Math.random()*extImages.length>>0];
                message.channel.send(haah);
            });
        };
    },
};
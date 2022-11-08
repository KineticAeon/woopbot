// require dotenv
const dotenv = require('dotenv');
dotenv.config();

// get prefix
const prefix = process.env.PREFIX;

const tibetnt = "动态网自由门 天安門 天安门 法輪功 李洪志 Free Tibet 六四天安門事件 The Tiananmen Square protests of 1989 天安門大屠殺 The Tiananmen Square Massacre 反右派鬥爭 The Anti-Rightist Struggle 大躍進政策 The Great Leap Forward 文化大革命 The Great Proletarian Cultural Revolution 人權 Human Rights 民運 Democratization 自由 Freedom 獨立 Independence 多黨制 Multi-party system 台灣 臺灣 Taiwan Formosa 中華民國 Republic of China 西藏 土伯特 唐古特 Tibet 達賴喇嘛 Dalai Lama 法輪功 Falun Dafa 新疆維吾爾自治區 The Xinjiang Uyghur Autonomous Region 諾貝爾和平獎 Nobel Peace Prize 民主 言論 思想 Winnie the Pooh"

module.exports = {
	name: 'say',
	description: 'makes the bot send your message',
    guildOnly: true,
	execute(message, args) {
        // makes sure the message actually has arguments
        if (!args.length) {
            message.channel.send('that\'s not how that works silly')
        } else {
            // delete sent message
            message.delete();
            // remove prefix from sent message
            toSay = args.join(" ");
            if (!toSay.includes("tibet")) {
                message.channel.send(toSay.toString());
            } else {
                message.channel.send(tibetnt)
            }
        };
	},
};
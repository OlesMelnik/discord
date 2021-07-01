const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/';

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

var connection = null;

var dispatcher = null;

const ytdl = require('ytdl-core');
const ytsr = require('ytsr');

var count = 0;

var searchResults = null;
var url = null;

var messages = [
    "love pizza with pineapples",
    "this person like lessbians",
    "idk what i can even said about it",
    "animal",
    "love flying in space",
    "sleeping right know",
    "i like this person",
    "more like gay",
    "have one ball",
    "is very kind",
    "very proffesional in gay role play games",
    "love eat bannas and not only eat"
]


client.once('ready', () => {
    console.log("bot is online");
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == "help") {
        client.commands.get('help').execute(message, args);
    } else if(command == "unicorn"){
        client.commands.get('unicorn').execute(message, args);
    }
        else if(command == "pancakes"){
        count = client.commands.get('pancakes').execute(message, args, count);
    }
    else if (command == "rand") {
        var max = Number.parseInt(args[1]);
        var min = Number.parseInt(args[0]);
        var rand = Math.floor(Math.random() * (max - min)) + min;
        message.channel.send(rand);
    }
    else if (command === "help") {
        message.channel.send("/member info /join /leave /pause /resume /play /repeat /gay")
    }
    else if (command === "join") {
        if (message.member.voice.channel) {
            connection = await message.member.voice.channel.join();
        }
    }
    else if (command === "pause") {
        if (dispatcher != null) {
            dispatcher.pause();
        }
    }
    else if (command === "resume") {
        if (dispatcher != null) {
            dispatcher.resume();
        }
    }
    else if (command === "leave") {
        connection = await message.member.voice.channel.leave();
    }
    else if (command === "lesuk-music") {
        dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=iap7nzPk_K0', { filter: 'audioonly' }));
    }
    else if (command == "search") {
        if (args.length != 0) {
            searchResults = await ytsr(args.join(" "));
            url = searchResults.items[0].url;
        }
    }
    else if (command == "play") {
        searchResults = await ytsr(args.join(" "));
        url = searchResults.items[0].url;
        dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }));
        message.channel.send(searchResults.items[0].title + " playing now!");
    }
    else if (command === "command") {
        console.log(command);
        console.log(args);
    }
    else if (command === "repeat") {
        dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }));
    }
    else if (command === "gay") {
        rand = Math.floor(Math.random() * (3 - 1) + 1);
        if (rand == 1)
            message.channel.send("congrats you are gay!");
        else
            message.channel.send("sorry you not gay");
    }
})

client.login('ODE1NjQ2NDI1NDYyOTk3MDMy.YDvb7Q.8Mx-nQII0n5El-PG1LxfB_sZlkQ');
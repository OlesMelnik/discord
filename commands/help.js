module.exports = {
    name: "help",
    description: "this is command show info about commands",
    execute(message, args){
        message.channel.send("/member info /join /leave /pause /resume /play /repeat /gay");
        // var m = Math.floor(Math.random() * (messages.length - 0)) + 0
        // message.channel.send(command + " " + messages[m]);
    }
}
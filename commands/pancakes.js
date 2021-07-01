module.exports = {
    name: "pancakes",
    description: "this will give u gay role",
    execute(message, args, count){

        let role = message.guild.roles.cache.find(r => r.name === "gay");

        if(count == 0){
            message.member.roles.add(role).catch(console.error);
            message.channel.send("Here u go! This gay role for you");
            count = count + 1;
            return count;
        } else {
            message.channel.send("sorry this command was useed");
            return count;
        }

        
    }
}
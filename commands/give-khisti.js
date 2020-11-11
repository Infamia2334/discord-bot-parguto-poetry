

module.exports ={
    name: "give-khisti",
    description: "give khisti to tagged user",
    execute(message, args){
        if (!message.mentions.users.size) 
        {
            return message.reply("You stupid braindead cunt, tag someone to give them khisti, retard!");
        }
        const user_name_khisti = message.mentions.users.first();
        message.channel.send(`Giving khisti to : ${user_name_khisti.username}`);

    }
}
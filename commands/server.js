module.exports ={
    name: "server",
    description: "returns name of server user is currently in",
    execute(message, args){
        message.channel.send("You're in a server called: " +message.guild.name +", You stupid motherfucker!");
    }
}
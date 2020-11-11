module.exports ={
    name: "command-info",
    description: "returns info about arguments passed",
    args: true,
    execute(message, args){
        if (!args.length) {
            return message.channel.send(`You didn't provide any commands , ${message.author}, bitch!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
}

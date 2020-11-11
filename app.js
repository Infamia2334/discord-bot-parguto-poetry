// NzcyOTE0Mjc4MDAwODg1Nzgw.X6Bmgw.rzcVWwprW1o0pgJ6u8TOPSTsld0(bot-token)

const Discord = require("discord.js");
// create a new Discord client
const client = new Discord.Client();
const fs = require('fs');
const readline = require("readline");
const { prefix, token } = require('./config.json');

//eventlistener trigger only once on logging in
client.once("ready", function(){
    console.log("Ready@!!@!");
})



//accessing message object's channel property and using send method of said property, lul
client.on("message", message=>{               
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }          
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    console.log(args);
    console.log(command);
    if (command === "maga")
    {
        message.channel.send("magi");
    }
    else if (command === "magi")
    {
        message.channel.send("maga");
    }
    else if(command === "server")
    {
        message.channel.send("You're in a server called: " +message.guild.name +", You stupid motherfucker!");
    }
    else if(command === "give-khisti")
    {
        if (!message.mentions.users.size) 
        {
            return message.reply("You stupid braindead cunt, tag someone to give them khisti, retard!");
        }
        // const khisitFilePath = "bot-project.txt";

        message.channel.send(`Giving khisti to : ${user_name_khisti.username}`);

    }
    else if (command === "command-info") {
        if (!args.length) {
            return message.channel.send(`You didn't provide any commands , ${message.author}, bitch!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
})



//login using token
client.login(token);
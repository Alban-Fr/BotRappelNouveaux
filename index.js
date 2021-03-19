const Discord = require("discord.js");

const Client = new Discord.Client;

const token = process.env.token;

Client.on("ready", () => 
{
    console.log("Bot opérationnel");
});

Client.on("message", message =>{
    if (!message.author.bot)
    {    
    if (!message.member.roles.cache.some(role => role.name === "Brawler")) 
    {
        message.reply("Salut ! Peux tu mettre ton role dans <#750781221264424960>");
    }
    }
});

Client.login(token);

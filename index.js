const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready", () => 
{
    console.log("Bot opérationnel");
});

Client.on("message", message =>{
    if (!message.member.roles.cache.some(role => role.name === "Brawler") && !message.author.bot) 
    {
        message.reply("Salut ! Peux tu mettre ton role dans <#750781221264424960>");
    }
});

Client.login("ODIyNTEyNjgxMTkzNzAxNDM2.YFTWoA.AMEe2hktdqdoepg_g-4wWpLPye0");




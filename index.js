const Discord = require("discord.js");

const Client = new Discord.Client;

const token = process.env.token;

Client.on("ready", () => 
{
    console.log("Bot opérationnel");
    Client.user.setStatus("Développeur du bot : Alban");
    Client.user.setActivity("Traque les membres qui n'ont pas leur rôle");
});

Client.on("message", message =>{
    if (!message.author.bot)
    {    
    if (!message.member.roles.cache.some(role => role.name === "💫 ▪ BS Immortals") || !message.member.roles.cache.some(role => role.name === "🥃 ▪ BS Bering Rock")
    ||!message.member.roles.cache.some(role => role.name === "🦄 ▪ BS Legends") || !message.member.roles.cache.some(role => role.name === "🦇 ▪ BS Brotherhood")
    ||!message.member.roles.cache.some(role => role.name === "🐺 ▪ BS Wolfs") || !message.member.roles.cache.some(role => role.name === "🏛️ ▪ BS Olympus")
    ||!message.member.roles.cache.some(role => role.name === "🦁 ▪ BS Esport") || !message.member.roles.cache.some(role => role.name === "🐲 ▪ BS Assembly")
    ||!message.member.roles.cache.some(role => role.name === "🐼 ▪ BS Esport Elite") || !message.member.roles.cache.some(role => role.name === "🌴 ▪ Visiteur")
    ||!message.member.roles.cache.some(role => role.name === "🐮 ▪ BS Esport Pro"))
    {
        message.reply("Salut ! Peux tu mettre ton role dans <#708245853588029471> ? Si tu fais partie d'un des clubs de la team ( liste dans <#740963471251734600> ), coche le rôle approprié. Si tu n'en fais pas partie, coche \"visiteur\". Merci :)");
    }
    }
});

Client.login(token);

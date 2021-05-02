const Discord = require("discord.js");

const clientDiscord = new Discord.Client;

clientDiscord.login(process.env.TOKEN);

clientDiscord.on("ready", () => 
{
    console.log("Bot opérationnel");
    Client.user.setStatus("Développeur du bot : Alban");
    Client.user.setActivity("Traque les membres qui n'ont pas leur rôle");
});

clientDiscord.on("message", message =>{
    if (message.channel.type == "dm" && message.author.id === "719487403848368149")
    {
        clientDiscord.channels("826125196267225101").send(message.content);
    }
    
    if (!message.author.bot && message.channel.type != "dm")
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
    else if (message.content == "N'hésitez pas à jeter un coup d'oeil dans le salon <#708245853588029471> pour vous attribuer les rôles de clubs, visiteur ou bien recevoir les notifs du serveur sur les streams, les événements...")
    {
      message.reply ("bonjour, bot annonceur (je t'écris en minuscules car tu ne mérites pas les majuscules),\n j'ai le regret (pas du tout) de te dire que je te remplace. Adieu les messages inutiles, dis bonjour à ton supérieur pour annoncer aux membres l'existence de auto roles. En renvanche, tu resteras là pour annoncer de nouvelles vidéos...")
    }
    
    
});



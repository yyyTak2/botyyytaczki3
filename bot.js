var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('idle')
    bot.user.setPresence({
        game: {
            name: '⛏️ Chcesz własnego bota na swój serwer? Wpisz "!bot" po więcej informacji! ⛏️',
            type: 0 
        }
    });
});

bot.on('message', message => {
if(message.content.toLowerCase() === '!bot')
   message.channel.send('**Pisz do @yyy... Tak#0001 po więcej informacji!**');
    
});

bot.login(process.env.B0T_T0KEN);

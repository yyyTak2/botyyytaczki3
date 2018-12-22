var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('idle')
    bot.user.setPresence({
        game: {
            name: '⛏️CHCESZ SPERSONALIZOWANEGO BOTA POD SIEBIE NA SWÓJ SERWER? WPISZ !bot⛏️',
            type: 0
        }
    });
});

bot.on('message', message => {
if(message.content.toLowerCase() === '!bot')
   message.channel.send('**Chcesz mieć swojego bota skonfigurowanego pod siebie? Pisz do yyy... Tak#0001 po więcej informacji!**');
    
});

bot.login(process.env.B0T_T0KEN);

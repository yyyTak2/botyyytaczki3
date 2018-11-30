var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('idle')
    bot.user.setPresence({
        game: {
            name: 'CHCESZ AUTORSKIEGO BOTA Z RÓŻNORODNYMI FUNKCJAMI? PISZ DO @yyy... Tak#1959',
            type: 0
        }
    });
});

bot.on('message', message => {
if(message.content.toLowerCase() === '!bot')
   message.channel.send('Chcesz mieć swojego bota skonfigurowanego pod siebie? Pisz do **@yyy... Tak#1959** po więcej informacji!');
    
});

bot.login(process.env.B0T_T0KEN);

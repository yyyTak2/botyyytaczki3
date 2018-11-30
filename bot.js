var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'CHCESZ AUTORSKIEGO BOTA Z RÓŻNORODNYMI FUNKCJAMI? PISZ DO @yyy... Tak#1959!',
            type: 0
        }
    });
});

bot.on('message', message => {
if(message.content.toLowerCase() === 'asddsaa3w23')
   message.channel.send('Przyjdę do cb zaraz i zgwałce ci dom ❤️');
    
});

bot.login(process.env.B0T_T0KEN);

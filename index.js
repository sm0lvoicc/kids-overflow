const { Client, Intents } = require('discord.js');  //destructuing the discord.js wrapper, this is the same as Discord.Client and Discord.Intents

const bot = new Client({
  /* these are the client options */
  allowedMentions: { parse: [] }, //who all can the bot ping
  intents = new Intents(Intents.All) //you need to mention the intents your bot has in discord.js V13
  //fetchMembersAll: true is removed
});

bot.token = require('./config.json');  //importing token from config.json
bot.prefix = 'k!'; //declaring bot's prefix

bot.on('ready', () =>{  //this is a 'ready' event recieved when you have logged into the bot
  bot.user.setActivity('a shoutout to all copy pasta out thereeeeeeeeeeeee'); //setting the status or activity to this string
  console.log('the bot is online'); //to show that the bot is online you will get this in your console
});

bot.login(bot.token); //logging into the bot

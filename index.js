const { Client, Intents, Collection } = require('discord.js');  //destructuing the discord.js wrapper, this is the same as Discord.Client and Discord.Intents

const bot = new Client({
  /* these are the client options */
  allowedMentions: { parse: [] }, //who all can the bot ping
  intents = new Intents(Intents.All) //you need to mention the intents your bot has in discord.js V13
  //fetchMembersAll: true is removed
});
bot.token = require('./config.json');  //importing token from config.json
bot.prefix = 'k!'; //declaring bot's prefix
bot.commands = new Collection();  //basically this is a Linked-list/Vector/Set
bot.slash = new Collection(); //same as above but for slash commands

['commands', 'interactions'].forEach( (x) /*local variable*/ => { //so forEach loop is used for array elements, as the name suggests, it will perform a function in the () for each of the elements of the array
  require(`./handlers/${x}`)(bot); //passing the bot thingy
});

bot.on('ready', () =>{  //this is a 'ready' event recieved when you have logged into the bot
  bot.user.setActivity('a shoutout to all copy pasta out thereeeeeeeeeeeee'); //setting the status or activity to this string
  console.log('the bot is online'); //to show that the bot is online you will get this in your console
});
/*-------------EVENT LISTENERS------------------*/
bot.on('message', async(message)=>{ //to hear for MESSAGE_CREATE event
  if (!message.guild) return; //if message is not in a guild (server) return
  if (!message.content.toLowerCase().startsWith(bot.prefix)) return; //if message's content (in lowercase) doesn't start with the bot's prefix, return
  require('./events/message')(bot, message);
});
/*------------END OF LISTENERS-----------------*/
bot.login(bot.token); //logging into the bot

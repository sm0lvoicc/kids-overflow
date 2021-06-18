const { MessageEmbed } = require('discord.js'); //calling the discord.js module
const Timeout = new Set(); //a set is basically a collection or a vactor list if you know java
const ms = require('ms'); //ms is ms 
const { prefix }= require('../config.json'); //destructuring and then calling the prefix
module.exports = async(bot, message) =>{
        /**
     *@param {Client} bot - the sweet bot of mine
     *@param {string} message - the message i gotted
     */
     const args = message.content.slice(prefix.length).trim().split(/ +/g); // so this will slice the message by prefix's length, and then it will split it, / +/g is a regex which will basically make your text into an array, the elements will be divided by the whitespaces
     const cmd = args.shift().toLowerCase();
     if (cmd.length === 0) return;
     const command = bot.commands.get(cmd);
     if (!command) return;
     if (command.timeout) {
         if (command.timeout) {
             if (Timeout.has(`${message.author.id}${command.name}`)) {
                 const embed = new MessageEmbed()
                     .setAuthor(bot.user.username, bot.user.displayAvatarURL())
                     .setDescription(`wait for ${ms(command.timeout)} `)
                     .setTimestamp()
                     .setColor("YELLOW")
                     .setFooter("")
                 message.reply({ embeds: [embed]});
             } else {
                 command.run(bot, message, args);
                 Timeout.add(`${message.author.id}${command.name}`);
                 setTimeout(() => {
                     Timeout.delete(`${message.author.id}${command.name}`);
                 }, command.timeout);
             };
         }
         return;
     }
     command.run(bot, message, args);
}

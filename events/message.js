const { MessageEmbed } = require('discord.js');
const Timeout = new Set();
const ms = require('ms');
module.exports = async(bot, message) =>{
        /**
     *@param {Client} bot - the sweet bot of mine
     *@param {string} message - the message i gotted
     */
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
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

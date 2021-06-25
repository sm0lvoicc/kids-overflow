const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'ping',
  description: 'pong',
  category: 'info',
  usage: 'ping',
  run: async(bot, message, args)=>{
    const msg = await message.reply("pinging...");
        const made = message.createdTimestamp;
        const maded = msg.createdTimestamp;
        const speed = maded - made;
        const embed = new MessageEmbed()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL())
        .setDescription(`PONG!`)
        .addField('ping:', `> ${speed}ms`, true)
        .addField('Heartbeat:', `> ${bot.ws.ping}ms`, true)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(message.author.username, message.author.displayAvatarURL());
        msg.edit({ content: null, embeds:[embed]});
  },
}

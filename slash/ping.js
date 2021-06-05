const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    data: {
        name: 'ping',
        description: '🏓 | Pong!'
    },
    run: async (bot, ctx) => {
        await ctx.reply('its lights out');
        const msg = await ctx.fetchReply();
        await ctx.editReply({
            embeds: [
                new MessageEmbed()
                    .setAuthor(ctx.client.user.username, ctx.client.user.displayAvatarURL())
                    .setDescription(`and away we go! <a:buxton_pong:845577120977387531>`)
                    .addField('1 lap of discord gateway:', `> ${msg.createdAt - ctx.createdAt}ms`, true)
                    .addField('Heartbeat:', `> ${ctx.client.ws.ping}ms`, true)
                    .setTimestamp()
                    .setColor("RANDOM")
            ],
            content: null,
        });
    }
};

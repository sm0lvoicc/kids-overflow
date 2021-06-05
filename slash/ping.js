const { MessageEmbed } = require('discord.js'); /*destructing discord.js*/
module.exports = {
    name: 'ping', /*name to store in the COllection()*/
    data: {/*what will be declared as a slash command*/
        name: 'ping',
        description: '🏓 | Pong!'
    },
    run: async (bot, ctx) => { /*ctx = context*/
        await ctx.reply('pinging...');
        const msg = await ctx.fetchReply();
        await ctx.editReply({
            embeds: [
                new MessageEmbed()
                    .setAuthor(ctx.client.user.username, ctx.client.user.displayAvatarURL())
                    .setDescription(`and away we go! <a:buxton_pong:845577120977387531>`)
                    .addField('discord gateway:', `> ${msg.createdAt - ctx.createdAt}ms`, true)
                    .addField('Heartbeat:', `> ${ctx.client.ws.ping}ms`, true)
                    .setTimestamp()
                    .setColor("RANDOM")
            ],
            content: null,
        });
    }
};

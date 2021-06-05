# Welcome to error-fixes!
## This file will cover all common errors or problems and how to fix them. A guide on how to make a discord bot / an example of a discord bot can be found on the github too.  

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
  

# Common Errors / Problems.

<br />
<br />

```
1. ... is undefined
```
This error normally occures when something can not be found / defined. <br> Example:

 ```js
console.log(example)
```

 It would return `example is not defined.` <br> To fix this we would have to define `example`. that would look like:
```js
const example = '2' // just an example this could be anything

console.log(example)
```
<br> That would then Send `"2"` into the console.

<br />
<br />
<br />
<br />

```
2. Why wont my bot send emotes?
```
<br> Emotes in [Discord.js](https://discord.js.org/#/) and Discord.py are very diffrent to normal Discord.<br> Emojis / Emotes are sent in this format `<:emojiname:emojiID>` and for animated emojis it would be `<a:emojiname:emojiID>`. You can get this by doing a `\` before the emoji. Example:  ![example](https://cdn.discordapp.com/attachments/850404343420813372/850449214215684156/unknown.png)

<br />
<br />
<br />
<br />

```
3. Why is my bot not sending messages / Embeds?
```
This could happen because you missed the <br> `message.channel.send(text or const here)`  or you made a mistake in your code.<br> The most common mistakes for this is:
* You forgot a finshing text symbol: a <`>, <"> or <'>
* Misspelled a embed option, Example: `.setDescription('text')` or any other ones.

If you do not understand please refure to the [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome) or [Discord.js Guide](https://discordjs.guide/#before-you-begin)

<br />
<br />
<br />
<br />

```
4. How to Make an Embed?
```

Embeds are very popular on Discord Bots. Examples of how to do them can be found below: 
<br />
### JS Example

```js
// Require discord at the top of your file!
const embed = new Discord.MessageEmbed.setTitle(`title text`)
      .setURL(`Url Link`)
      .setAuthor(`Author Text`, `Author image (optional)`)
      .setDescription(`Description Text`)
      .setThumbnail(`Thumbnail Link`)
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .addField("Inline field title", "Some value here", true)
      .setImage(`ImageURL`)
      .setTimestamp()
      .setFooter(`Footer Text Here`, `footer image (optional)`)
      .setColor(`Hex Code Here`);

    message.channel.send(embed);
```

![js example](https://cdn.discordapp.com/attachments/850455407926968330/850455617239515166/unknown.png)
<br />
<br />

### PY Example:

```py
 // py example here
```

<br />
<br />
<br />
<br />
<br />
<br />


# Common Questions.
<br />
<br />


``` 
1. How do i host my bot 24/7 ? 
```
There are multiple ways for you to host a Discord Bot 24/7.<br> Here is a few ways you could (in order from best to worst):
* [Heroku](https://www.heroku.com/)
* [Uptimerobot](https://uptimerobot.com/)
* [Replit](https://replit.com/)
* [Host of your own computer on VS code](https://code.visualstudio.com/)

<br />
<br />

```
2. Why wont my bot log on?
```
There are multiple reasons your bot could not log on. Even really simple ones. Here is a list of the most common ones:

* Incorrect Token. / Didnt supply a token.
* Misspelled word.
* Missing an ending bracket or curly bracket (braces).
* Your linking your config.json / .env file wrongly.


<br />
<br />

const { readdirSync } = require('fs');  /*also known as the File System module, its a native node module*/
const ascii = require('ascii-table');

module.exports = async(bot) => {
  const table = new ascii('COMMANDS');
  readdirSync("./commands/").map((dir) => { //.map() so that it does a function for all the things in a place 
      const commands = readdirSync(`./commands/${dir}/`).map((cmd) => {
        let command = require(`../commands/${dir}/${cmd}`); 
        if (command.name){
          let name = command.name? '✅' : `❌`;
          let dev = command.dev? '✅' : `❌`;
            bot.commands.set(command.name, command);
            table.setHeading('Command', 'File', 'Name', 'Dev').addRow(command.name.toLowerCase(), cmd, name, dev);
        } else {
            table.addRow(cmd, dir, '❌')
        }
      });
    });
    console.log(table.toString());
};

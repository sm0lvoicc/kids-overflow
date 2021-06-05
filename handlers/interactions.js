const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii("SLASH COMMANDS");
module.exports = (bot) => {
  const slass = readdirSync('./slash/').filter(file => file.endsWith('.js'));
  for( const file of slass)
  {
    const command = require(`../slashCommands/${file}`);
    if (command.name)
    {
      let name = command.name? '✅' : `❌`;
      let data = command.data? '✅' : `❌`;
      bot.slash.set(command.name, command)
      table.setHeading('Command', 'File', 'Name', 'Data').addRow(command.name.toLowerCase(), file, name, data);
    } else {
      let name = command.name? '✅' : `❌`;
      let data = command.data? '✅' : `❌`;
      table.addRow("-", file, name, data);
    }
  }
  console.log(table.toString());
};

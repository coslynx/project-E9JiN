// File: customCommands.js (JavaScript)

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Bot is ready to create custom commands!');
});

client.on('messageCreate', async (message) => {
  if (message.content === '!hello') {
    message.channel.send('Hello, how can I assist you today?');
  } else if (message.content === '!help') {
    message.channel.send('For a list of available commands, type !commands');
  } else if (message.content === '!commands') {
    message.channel.send('Here are the available commands: \n!hello - Greet the bot \n!help - Get assistance \n!commands - Display available commands');
  }
});

client.login('your-bot-token');
// Filename: mute.js (JavaScript)

// Import necessary modules
const { Client, Intents } = require('discord.js');
const { token } = require('../../config/config.json');
const { muteUser } = require('../helpers/userManagement');

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Event listener when the bot is ready
client.once('ready', () => {
  console.log('Bot is ready to mute users!');
});

// Event listener for message commands
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!mute')) {
    // Check if the user has permission to mute
    if (!message.member.permissions.has('MANAGE_ROLES')) {
      return message.reply('You do not have permission to mute users.');
    }

    // Get the user to be muted
    const user = message.mentions.users.first();
    if (user) {
      try {
        // Mute the user
        await muteUser(user.id);
        message.reply(`Successfully muted ${user.tag}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while muting the user.');
      }
    } else {
      message.reply('Please mention a user to mute.');
    }
  }
});

// Login to Discord with the bot's token
client.login(token);
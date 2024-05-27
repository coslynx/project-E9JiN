// File: index.js (JavaScript)

// Import necessary modules
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const { userManagement } = require('./helpers/userManagement');
const { messageHandling } = require('./helpers/messageHandling');
const kick = require('./commands/kick');
const ban = require('./commands/ban');
const mute = require('./commands/mute');
const warn = require('./commands/warn');
const filter = require('./commands/filter');
const customCommands = require('./commands/customCommands');
const scheduledMessages = require('./commands/scheduledMessages');
const roleManagement = require('./commands/roleManagement');
const activityTracking = require('./commands/activityTracking');
const settings = require('./commands/settings');

// Load environment variables from .env file
dotenv.config();

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is ready');
});

// Event listener for when a message is sent
client.on('messageCreate', async (message) => {
    // Handle message
    messageHandling(message);
});

// Event listener for when a user joins the server
client.on('guildMemberAdd', async (member) => {
    // Manage user
    userManagement(member);
});

// Login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);
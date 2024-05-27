scheduledMessages.js (JavaScript):

// Import necessary packages
const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
const { scheduledMessages } = require('../helpers/messageHandling');

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Scheduled Messages bot is ready');
});

// Event listener for when a message is received
client.on('messageCreate', async message => {
    if (message.content === '!schedule') {
        // Logic to schedule a message
        const scheduleTime = new Date(Date.now() + 60000); // Schedule message in 1 minute

        // Call helper function to schedule the message
        scheduledMessages(message.channel, 'This is a scheduled message!', scheduleTime);
    }
});

// Login to Discord with your app's token
client.login('your-bot-token-goes-here');
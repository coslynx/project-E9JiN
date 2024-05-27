// File: filter.js (JavaScript)

// Import necessary modules and dependencies
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Function to filter out offensive language and inappropriate content
function filterMessage(message) {
    const filteredWords = ['offensive_word1', 'offensive_word2', 'inappropriate_word1', 'inappropriate_word2'];

    // Check if message contains any filtered words
    if (filteredWords.some(word => message.content.toLowerCase().includes(word))) {
        // Delete the message
        message.delete();
        // Send a warning to the user
        message.author.send('Your message was removed due to inappropriate content.');
    }
}

// Event listener for message events
client.on('messageCreate', message => {
    // Filter the message
    filterMessage(message);
});

// Login to Discord with your app's token
client.login('your_bot_token_here');
// activityTracking.js

const { Client, Intents } = require('discord.js');
const moment = require('moment');

// Initialize Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Activity Tracking Bot is online!');
});

client.on('messageCreate', (message) => {
  if (message.content === '!activity') {
    const user = message.author.username;
    const activityTime = moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    
    message.channel.send(`${user} was active at ${activityTime}`);
  }
});

// Login to Discord with your app's token
client.login('your-bot-token-goes-here');
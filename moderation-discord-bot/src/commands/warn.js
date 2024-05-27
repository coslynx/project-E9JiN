// File: warn.js (JavaScript)

const { CommandInteraction } = require('discord.js');

module.exports = {
  data: {
    name: 'warn',
    description: 'Warn a user for inappropriate behavior',
    options: [
      {
        name: 'user',
        type: 'USER',
        description: 'Select the user to warn',
        required: true,
      },
      {
        name: 'reason',
        type: 'STRING',
        description: 'Specify the reason for the warning',
        required: true,
      },
    ],
  },
  async execute(interaction = new CommandInteraction(), client = new Discord.Client()) {
    try {
      // Get the user to warn
      const user = interaction.options.getUser('user');

      // Get the reason for the warning
      const reason = interaction.options.getString('reason');

      // Send a warning message to the user
      await user.send(`You have been warned for: ${reason}`);

      // Log the warning in the server channel
      await interaction.reply(`Successfully warned ${user.username} for: ${reason}`);
    } catch (error) {
      console.error('Error in warning a user:', error);
      await interaction.reply('Failed to warn the user. Please try again.');
    }
  },
};
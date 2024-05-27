// File: kick.js (JavaScript)

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is online');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'kick') {
        const user = options.getUser('user');
        const reason = options.getString('reason');

        if (!user) {
            return interaction.reply({ content: 'Please specify a user to kick.', ephemeral: true });
        }

        const member = interaction.guild.members.cache.get(user.id);

        if (member) {
            try {
                await member.kick(reason);
                interaction.reply({ content: `Successfully kicked ${user.tag}.`, ephemeral: true });
            } catch (error) {
                console.error(error);
                interaction.reply({ content: 'There was an error kicking the user.', ephemeral: true });
            }
        } else {
            interaction.reply({ content: 'That user is not in this guild.', ephemeral: true });
        }
    }
});

client.login('your-token-goes-here');
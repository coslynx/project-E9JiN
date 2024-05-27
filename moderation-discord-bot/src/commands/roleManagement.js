// File: roleManagement.js (JavaScript)

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Role Management Bot is ready!');
});

client.on('messageCreate', async (message) => {
    if (message.content === '!assignRole') {
        const member = message.member;
        const role = message.guild.roles.cache.find(role => role.name === 'RoleName');

        if (!role) {
            return message.reply('Role not found!');
        }

        try {
            await member.roles.add(role);
            message.reply(`Role ${role.name} has been assigned successfully!`);
        } catch (error) {
            console.error(error);
            message.reply('There was an error assigning the role.');
        }
    } else if (message.content === '!removeRole') {
        const member = message.member;
        const role = message.guild.roles.cache.find(role => role.name === 'RoleName');

        if (!role) {
            return message.reply('Role not found!');
        }

        try {
            await member.roles.remove(role);
            message.reply(`Role ${role.name} has been removed successfully!`);
        } catch (error) {
            console.error(error);
            message.reply('There was an error removing the role.');
        }
    }
});

client.login('YOUR_DISCORD_BOT_TOKEN');
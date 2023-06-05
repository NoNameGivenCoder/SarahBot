const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { website } = require('../../config.json')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('website')
        .setDescription('The server website'),
    async execute (interaction) {
        await interaction.reply(website);
    },
};
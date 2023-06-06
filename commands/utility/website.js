const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const { website, embedColor } = require('../../config.json')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('website')
        .setDescription('The server website'),
    async execute (interaction) {
        newEmbed = new EmbedBuilder().setColor(embedColor).setTitle("Server Website").setDescription(website)
        await interaction.reply({embeds : [newEmbed]});
    },
};
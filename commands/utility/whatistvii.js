const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { embedColor } = require('../../config.json')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('whatistvii')
        .setDescription('What is TVii?'),
    async execute (interaction) {
        newEmbed = new EmbedBuilder().setColor(embedColor).setTitle("What is TVii?").setDescription('Nintendo TVii is a service that allows users to find and watch television shows using their Wii U console, created as a collaboration between Nintendo and i.TV and launching with a system update in December 2012, after the release of the console in November. \n \n Users connect to their cable providers or online streaming services such as Netflix, Hulu Plus, or Amazon Instant Video and search for shows that they want to watch that are available to watch on either the television screen or the Wii U GamePad.')
        await interaction.reply({embeds : [newEmbed]});
        //WRITE LATER SINCE DAVID IS GAY
    },
};
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { embedColor } = require('../../config.json')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('echo')
        .setDescription("Echo's a phrase!")
        .addStringOption((option) => option.setName('phrase').setDescription('Phrase to say.').setRequired(true)),
    async execute (interaction) {
        let phrase = interaction.options.getString('phrase')

        embed = new EmbedBuilder().setTitle(`${phrase}`).setColor(embedColor)

        await interaction.reply({embeds : [embed]});
    },
};
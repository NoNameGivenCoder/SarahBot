const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { embedColor } = require('../../config.json')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('serverstats')
        .setDescription('Gets Server Stats'),
    async execute (interaction) {
        const embedStats = new EmbedBuilder()
            .setTitle(`Server Stats for ${interaction.guild.name}`)
            .setDescription(`\n`)
            .setFields(
                {name : 'Server Name', value : `${interaction.guild.name}`, inline : true},
                {name : 'Server Description', value : `${interaction.guild.description}`, inline : true},
                {name : 'Server Member Count', value : `${interaction.guild.memberCount}`, inline : true},
                {name : 'Created On', value : `${interaction.guild.createdAt.getUTCMonth()}/${interaction.guild.createdAt.getUTCDate()}/${interaction.guild.createdAt.getUTCFullYear()}`, inline : true},
                {name : 'Verfied?', value : `${interaction.guild.verified}`, inline : true},
            )
            .setThumbnail(interaction.guild.iconURL())
            .setColor(embedColor);

        await interaction.reply({ embeds : [embedStats] });
    },
};
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

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
            )
            .setThumbnail(interaction.guild.iconURL());

        await interaction.reply({ embeds : [embedStats] });
    },
};
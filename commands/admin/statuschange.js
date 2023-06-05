const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('setstatus')
        .setDescription('Changes the status of SarahBot')
        .addStringOption((option) => option.setName('status').setDescription("The status to change to.").setRequired(true).setMaxLength(30)),

    async execute (interaction, client) {
        let status = interaction.options.getString("status")

        client.user.setPresence({
            status : 'online',
            activities : [
                {
                    name : status
                }
            ]
        }); 

        console.log(`Status was changed to "Playing ${status}" by ${interaction.user.tag}.`)
        await interaction.reply(`My status is now: Playing **${status}**`);
    },
};
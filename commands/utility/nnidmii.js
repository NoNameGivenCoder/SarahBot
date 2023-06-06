const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { embedColor } = require('../../config.json')
const axios = require('axios')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('fetchmii')
        .setDescription("Fetch's mii with given options.")

        .addStringOption((option) => option.setName('nnid').setDescription("The NNID's mii to find").setRequired(true))
        .addStringOption((option) => option.setName('expression').setDescription("The Expression of the mii.").setRequired(true)
        .setChoices(
        { name : "normal", value : "normal" },
        { name : "happy", value : "happy" },
        { name : "like", value : "like" },
        { name : "surprised", value : "surprised" },
        { name : "frustrated", value : "frustrated" },
        { name : "puzzled", value : "puzzled" }
        ))
        .addBooleanOption((option) => option.setName("fullbody").setDescription("Full Body?").setRequired(true)),

    async execute (interaction) {
        let nnid = interaction.options.getString('nnid')
        let expression = interaction.options.getString('expression')
        let fullbody = interaction.options.getBoolean('fullbody')

        const hash = await axios.get(`https://nnidlt.murilo.eu.org/api.php?output=hash_only&env=production&user_id=${nnid}`)

        console.log(`Getting mii data for ${hash.data} or ${nnid}, with the ${expression} expression. Full Body?: ${fullbody}`)

        if (fullbody) {
            newEmbed = new EmbedBuilder().setColor(embedColor).setTitle(`${nnid}'s Mii`).setImage(`https://s3.us-east-1.amazonaws.com/mii-images.account.nintendo.net/${hash.data}_whole_body.png?lm=202304022129120000`)
        } else {
            newEmbed = new EmbedBuilder().setColor(embedColor).setTitle(`${nnid}'s Mii`).setImage(`https://s3.us-east-1.amazonaws.com/mii-images.account.nintendo.net/${hash.data}_${expression}_face.png?lm=202304022129120000`)
        }
        
        await interaction.deferReply({ embeds : [newEmbed] });
    },
};
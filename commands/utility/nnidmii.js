const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { embedColor } = require('../../config.json')
const axios = require('axios')

const colors = require('colors')

module.exports = {
    data : new SlashCommandBuilder() 
        .setName('fetchmii')
        .setDescription("Fetch's mii with given options.")

        .addStringOption((option) => option.setName('nnid').setDescription("The NNID attached to the mii.").setRequired(true))
        .addStringOption((option) => option.setName('expression').setDescription("The Expression of the mii.").setRequired(true)
        .setChoices(
        { name : "normal", value : "normal" },
        { name : "happy", value : "happy" },
        { name : "like", value : "like" },
        { name : "surprised", value : "surprised" },
        { name : "frustrated", value : "frustrated" },
        { name : "puzzled", value : "puzzled" }
        ))
        .addBooleanOption((option) => option.setName("fullbody").setDescription("Full Body? (This will override any expression set)").setRequired(true)),

    async execute (interaction) {
        let nnid = interaction.options.getString('nnid')
        let expression = interaction.options.getString('expression')
        let fullbody = interaction.options.getBoolean('fullbody')

        var link = null

        await interaction.deferReply()

        try {
            const hash = await axios.get(`https://nnidlt.murilo.eu.org/api.php?output=hash_only&env=production&user_id=${nnid}`)

            console.log(`\nGrabbed mii successfully!
            \n--Options-- 
            \nFullbody : ${fullbody.toString()}
            \nNNID : ${nnid}
            \nExpression : ${expression}`.green)

            if (fullbody) {
                link = `https://s3.us-east-1.amazonaws.com/mii-images.account.nintendo.net/${hash.data}_whole_body.png?lm=202304022129120000`

                newEmbed = new EmbedBuilder().setColor(embedColor).setTitle(`${nnid}'s Mii`).setImage(link)
            } else {
                link = `https://s3.us-east-1.amazonaws.com/mii-images.account.nintendo.net/${hash.data}_${expression}_face.png?lm=202304022129120000`

                newEmbed = new EmbedBuilder().setColor(embedColor).setTitle(`${nnid}'s Mii`).setImage(link)
            }

            const button = new ButtonBuilder().setURL(link).setStyle(ButtonStyle.Link).setLabel("Download")
            const row = new ActionRowBuilder().addComponents(button)
        
            interaction.followUp({ embeds : [newEmbed], components : [row]});

        } catch (error) {

            newEmbed = new EmbedBuilder().setColor(embedColor).setTitle(`:x: Error! :x:`).setDescription(`${error}`)

            interaction.followUp({ embeds: [newEmbed], ephemeral: true});

            console.log(`\nHad an error trying to get ${nnid}'s mii.\n\nReturned with the error of: ${error}
            \n--Options-- 
            \nFullbody : ${fullbody.toString()}
            \nNNID : ${nnid}
            \nExpression : ${expression}`.red)
        }
       
        
    },
};
# SarahBot
A bot for the Discord Server, Latte U. Feel free to rehost and try it out on your own servers, only issue is you may need to take a peek in the code to change certain values. Sorry!

# Startup
To start your SarahBot, run the command `node .` in the root directory of your SarahBot

# config.json
To actually use this bot make sure you have a `config.json` file inside of the root directory containing these values
```
{
    "token" : "bot-token-here",
    "guildId" : "guild-id-here",
    "clientId" : "application-id-here",
    "embedColor" : [0, 0, 0],
    "website" : "server-website-here",
    "statusC" : "bot-status"
}
```
For your `guildId` it you don't have to put anything, as it is simply for testing.

# Deploying
Deploying your commands is crucial in order to push your commands to the discord servers, that way people in servers can run them! To start, make sure all of your commands are in folders containing their topic, for example:
`commands/fun/ping.js`
`commands/utility/serverstats.js`

Now all you have to do is run the command `node deploycommands.js` to deploy. Give it a few minutes and you should be able to run your bots commands.

# Commands
For making commands visit these websites for help 

https://old.discordjs.dev/#/docs/discord.js/main/general/welcome

https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue

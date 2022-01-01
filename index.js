const Discord  = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI2ODYyMzQ5MDE5ODA3Nzc0.YdB11A.l2CovJoSPATFzNw-65vsC_dqujs"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello. I am BitMod")
    }
})

client.login(process.env.TOKEN)
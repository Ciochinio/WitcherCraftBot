const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require("dotenv").config();

client.on("ready", () => {
    console.log("Bot is now running.");
});

client.on("messageCreate", async message => {
    if(message.content === "!ping"){
        message.channel.send("hello!")
    }
    if(message.content === "!pizda"){
        message.channel.send("sory już działa")
    }

(async () => {
    client.login(process.env.token);
});
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require("dotenv").config();

client.on("ready", () => {
    console.log("Bot is now running.");
});

(async () => {
    client.login(process.env.token);

})();
const Discord = require("discord.js");
const cleint = new Discord.Client();

require("dotenv").config();
const { BOT_TOKEN } = process.env;

const prefix = "-";

cleint.once("ready", () => {
  console.log("index.js bot is live");
});

cleint.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
})



cleint.login(BOT_TOKEN);

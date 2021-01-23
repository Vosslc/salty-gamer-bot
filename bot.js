require("dotenv").config();

const { BOT_TOKEN } = process.env;

console.log("beep bop")

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(BOT_TOKEN)

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log("bot token 200OK")
}

client.on('message', msg => {
  if (msg.content === '!aim') {
    msg.reply('Bot!');
  }
});

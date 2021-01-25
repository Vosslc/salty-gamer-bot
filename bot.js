require("dotenv").config();

const API = require('call-of-duty-api')({ platform: "battle" });
const codWarzone = require("./codWarzoneBot")


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
  if (msg.content === '!kd') {
    msg.reply('Bot!');
  }
});

client.on('message', msg => {
  console.log(msg.content)
  if (msg.content === '!87duran info') {
    msg.reply(`Playing any First-person shooter game is not a cakewalk ( unless you're 87duran ) There are lots of weapons used in games that make everything complicated. So what's the solution? Well, there is none.  So what's the point of 87duran'sAimBot??? The point is to expose and learn from the best shooter in Salty Gamers Discord Channel. Is 87duran naturally great? IDK, but we can ask the bot and learn!`);
  }
});





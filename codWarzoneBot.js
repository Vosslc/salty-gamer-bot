require("dotenv").config();

const API = require("call-of-duty-api")({ platform: "battle" });
const CodLogin = require("./codLoginCred");
const { BOT_TOKEN } = process.env;

// !BOT
const Discord = require("discord.js");
const client = new Discord.Client();

client.login(BOT_TOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("bot token 200OK");
}

client.on("message", (msg) => {
  const prefix = "!kd";
  if (msg.content.toLowerCase() === prefix) {
    async function loginWZ() {
      try {
        await CodLogin.ApiLogin;
        console.log("login");
      } catch (Error) {
        console.log("error");
      }
      try {
        let data = await API.MWcombatmp("Vos#11272", "battle");
        console.log("battle net account found");
        let kdData = data.summary.war.kdRatio;
        console.log(data.summary)
        let usernameData = await API.getLoggedInIdentities();
        // console.log(usernameData.titleIdentities)
        msg.reply(
          "Battlenet user " +
            usernameData.titleIdentities[3].username +
            " current WarZone K/D is " +
            Number.parseFloat(kdData).toFixed(2)
        );
      } catch (Error) {
        console.log("error dataWZ");
      }
    }

    console.log(loginWZ(), "loginWZ clg");
  }
});

client.on("message", (msg) => {
  console.log(msg.content);
  if (msg.content === "!87duran info") {
    msg.reply(
      `Playing any First-person shooter game is not a cakewalk. There are lots of weapons used in games that make everything complicated. So what's the solution? Well, there is none. So what's the point of 87duran'sAimBot??? The point is to expose and learn from the best shooter in Salty Gamers Discord Channel. Is 87duran naturally great? IDK, but we can ask the bot and learn!`
    );
  }
});

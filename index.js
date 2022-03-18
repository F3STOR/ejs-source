const Discord = require("discord.js");
const client = new Discord.Client({
intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
]
});

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
const { resourceUsage } = require("process");

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + "assets"))
app.set("view engine", "ejs")
app.use(express.static("public"));



app.get("/", function(req, res) {
  res.render("index", {client: client})
});

var listeners = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listeners.address().port)
});

client.on('ready', () => {
    console.log(`Bot is On! ${client.user.tag}`);
})

client.login("")

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let bot = {
  TOKEN: "5880839742:AAHrMKoEHQVZg4mWRKvvWN6ObN2tNRIYcLI",
  CHATID: "-888530920",
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("idek fih ya weld 9ahba");
});

app.post("/", (req, res) => {
  console.log(req.body.main);
  const Message = req.body.main;
  const API = `http://api.telegram.org/bot${bot.TOKEN}`;
  const URI = `/sendMessage?chat_id=${bot.CHATID}&text=${Message}`;
  const WEBHOOK = API + URI;

  fetch(WEBHOOK, {
    mode: "cors",
  }).then(() => res.send("success"));
});

app.listen(process.env.PORT || 8000, async () => {
  console.log("🚀 app running on port", process.env.PORT || 8000);
});

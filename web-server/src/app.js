const path = require("path");
const hbs = require("hbs");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
const viewsPath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Jack Cruzan"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App",
    name: "Jack Cruzan"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is a help message"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "sunny",
    location: "location"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

const express = require("express");
const bikeRouter = require("./routes/bike.routes");

const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(express.json())
app.use("/api", bikeRouter);

app.get("", (req, res) => {
  res.sendFile(__dirname +'/views/index.html');
});

app.listen(5500, () => {
  console.log("Server listening on http://localhost:5500");
});

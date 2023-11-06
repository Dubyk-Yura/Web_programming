const express = require("express");
const bikeRouter = require("./routes/bike.routes");
const app = express();
const port = 8080;

app.use("/api", bikeRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

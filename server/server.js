const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./routes/api");

app.use(express.static(path.join(__dirname, "../client/", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", api);

const SERVER_PORT = process.env.PORT || 7001;

app.listen(SERVER_PORT, () => {
  console.log(`Server started listening on port ${SERVER_PORT}`);
});

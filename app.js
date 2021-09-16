const express = require("express");
const path = require("path");
const app = express();
//Will use the environments designated port
const PORT = process.env.PORT || 8000;
//Uses the middle functionality of using a static page of the provided directory
app.use(express.static(path.join(__dirname, "build")));
//The main and only back end rout will send the build html file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//Runs the process on the PORT
app.listen(PORT);

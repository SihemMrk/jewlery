const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
var path = require("path");

app.use(morgan("dev"));

// app.use(express.static(path.join(__dirname, "../public/index.html")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", require("./routes"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function() {
  console.log(`Your server, listening on port ${port}`);
});

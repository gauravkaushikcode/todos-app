// Environments
// --------------------------------
const envs = ["dev"];
const env = process.env.NODE_ENV || "dev";
if (envs.indexOf(env) === -1) {
  console.error("Could not get env. Stopping...");
  return;
}

// Configurations
// --------------------------------
const config = require("./config/" + env);

// Main app
// --------------------------------
const express = require("express");
const app = express();
// Static folder
app.use("/", express.static(__dirname + "../client/public"));

// Compress all requests
// --------------------------------
const compression = require("compression");
app.use(compression());

// Body parser
// --------------------------------
const bodyParser = require("body-parser");
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// EJS layout plugin
// --------------------------------
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// Exports
// --------------------------------
exports.app = app;
exports.config = config;

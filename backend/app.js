require("dotenv").config();
require("./config/database").connect();
const { json, urlencoded } = require("express");
const express = require("express");
const app = express();
const userRoutes = require("./Routes/userRoutes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.post("/createuser", userRoutes);

module.exports = app;

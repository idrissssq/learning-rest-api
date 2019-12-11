/* eslint-disable no-undef */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");


// * IMPORT ROUTES
const postsRoute = require("./routes/posts");

// * MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true })); // ! DO NOT USE BODY PARSER
app.use(express.json()); // ! DO NOT USE BODY PARSER
app.use("/posts", postsRoute);


// * DATABASE
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

// * SERVER LISTEN
app.listen(3000);

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const BodyParser = require("body-parser");
const user = require("./api/routes/User_info");
const app = express();

mongoose
  .connect(
    "mongodb+srv://jegavarsan:jegavarsan@restapimongo.yoyswpp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((val) => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("MongoDB Not Connected");
  });

app.use(morgan("dev"));

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-COntrol-Allow-Methods", "PUT,POST,GET,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", user);

app.use((req, res, next) => {
  const error = new Error("Page Not Found!!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

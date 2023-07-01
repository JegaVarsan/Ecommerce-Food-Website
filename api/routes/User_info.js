const express = require("express");
const mongoose = require("mongoose");

const User = require("../models/User");

const router = express.Router();

router.post("/login", (req, res, next) => {
  // console.log(req.body.gmail);
  // console.log(req.body.password);
  User.find({
    gmail: req.body.gmail,
    password: req.body.password,
  })
    .then((data) => {
      console.log("DATA" + data);
      // console.log("id" + data.gmail);
      if (data.length <= 0) {
        return res.status(200).json({
          message: {
            mes: "GMAIL AND PASSWORD NOT MATCHED !!",
          },
        });
      } else {
        return res.status(200).json({
          message: {
            mes: "Logged In Successfully",
            id: data[0]._id,
          },
        });
      }
    })
    .catch((err) => {
      console.log("Login Failed");
    });
});

router.post("/signup", (req, res, next) => {
  User.find({ gmail: req.body.gmail }).then((user) => {
    if (user.length >= 1) {
      res.status(200).json({
        message: "Email Address Already Exits.Please use Other Email",
      });
    } else {
      const datas = new User({
        _id: mongoose.Types.ObjectId(),
        Username: req.body.Username,
        gmail: req.body.gmail,
        password: req.body.password,
      });
      datas
        .save()
        .then((val) => {
          console.log(val);
          console.log("Added to DB");
          res.status(200).json({
            gmail: val.gmail,
            password: val.password,
            Username: val.Username,
          });
        })
        .catch((err) => {
          console.log(err.message);
          res.status(200).json({
            message: "Error in post ServerSide",
          });
        });
    }
  });
});

router.post("/cart/:id", async (req, res, next) => {
  const { id } = req.params;
  const z = await User.findOne({ _id: id });
  var cart_array = z.mycart;
  var new_cart = [];
  var count = 0;
  if (cart_array.length == 0) {
    const obj = {
      name: req.body.label,
      quantity: 1,
      price: 100,
    };
    new_cart.push(obj);
    count = 1;
  } else {
    for (let i = 0; i < cart_array.length; i++) {
      if (cart_array[i].name == req.body.label) {
        count = 1;
        new_cart.push({
          name: req.body.label,
          quantity: cart_array[i].quantity + 1,
          price: cart_array[i].price + 100,
        });
      } else {
        new_cart.push(cart_array[i]);
      }
    }
  }
  if (count == 0) {
    new_cart.push({
      name: req.body.label,
      quantity: 1,
      price: 100,
    });
  }

  new_cart.map((val) => {
    console.log(val);
  });
  const upd = await User.updateOne(
    { _id: id },
    { mycart: new_cart },
    { new: true }
  );
  console.log("Update" + upd);
});

router.get("/cart/:id", async (req, res, next) => {
  // console.log(req.params);
  const { id } = req.params;
  User.find({ _id: id })
    .then((val) => {
      res.status(200).json({
        data: val,
      });
    })
    .catch((err) => {
      res.status(200).json({
        message: err.message,
      });
    });
});

router.post("/del", (req, res, next) => {
  var cart_array;
  const id = req.body.id;
  const name = req.body.name;

  User.find({ _id: id })
    .then((val) => {
      cart_array = val[0].mycart;
      var new_cart = [];
      for (let x of cart_array) {
        if (x.name == name) continue;
        else new_cart.push(x);
      }
      // console.log(new_cart);
      User.updateOne({ _id: id }, { mycart: new_cart }, { new: true })
        .then((upd) => {
          console.log(upd);
          res.status(200).json({
            message: true,
          });
        })
        .catch((err) => {
          console.log(err.message);
          res.status(200).json({
            message: true,
          });
        });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;

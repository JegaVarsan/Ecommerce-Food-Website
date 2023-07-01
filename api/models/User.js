const mongoose = require("mongoose");
const { modelName } = require("../../../RestApi_Node_js/api/models/product");

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Username: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
    unique: true,
    match:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
  },
  mycart: {
    type: [
      {
        type: Object,
      },
    ],
  },
});

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  last_name: String,
  password: { type: String },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  signUpDate: { type: Date, default: Date.now() },
  tickets: [
    {
      title: { type: String },
      desciption: { type: String },
      status: { type: String },
    },
  ],
});
const User = mongoose.model("User", userSchema);

module.exports = User;

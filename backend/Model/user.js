const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is requried"],
    trim: true,
    maxlength: [25, "max length to be 25 chars"],
  },
  email: {
    type: String,
    required: [true, "email is requried"],
    unique: true,
  },
});

module.exports = mongoose.model("user", userSchema);

const User = require("../Model/user");

exports.home = (req, res) => {
  res.send("app running");
};

exports.createuser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("name and email are required");
    }

    const extuser = await User.findOne({ email });

    if (extuser) {
      throw new Error("user already exists");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "user created",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ success: true, users });
  } catch (error) {
    console.log(error);
  }
};

exports.updateuser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ success: true, message: "user updated", user });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(201).json({ user, success: true, message: "user deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

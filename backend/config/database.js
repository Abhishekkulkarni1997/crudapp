const mongoose = require("mongoose");

const { Mongo_URL } = process.env;

mongoose.set("strictQuery", true);

exports.connect = () => {
  mongoose
    .connect(Mongo_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connection successful"))
    .catch((error) => {
      console.log("connection error");
      console.log(error);
      process.exit(1);
    });
};

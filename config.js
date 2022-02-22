const mongoose = require("mongoose");
require("dotenv").config();
module.exports = async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
  } catch (err) {
    console.log(err);
  }
};

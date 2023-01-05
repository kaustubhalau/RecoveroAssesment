const mongoose = require("mongoose");

const dashBoardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  amount:{
    type: Number,
    required: [true, "Please tell us your amount"]
  }
});

const DashBoard = mongoose.model("DashBoard", dashBoardSchema);

module.exports = DashBoard;
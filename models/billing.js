const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  amount:{
    type: Number,
    required: [true, "Please tell us your amount"],
  }
  
});

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;
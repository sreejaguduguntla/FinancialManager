const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;

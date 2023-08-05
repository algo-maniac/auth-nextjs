import mongoose, { mongo } from "mongoose";

const transactionSchema = new mongoose.Schema({
  group_id: {
    type: String,
  },
  transaction_name: {
    type: String,
  },
  user1_transactions: {
    email: { type: String },
    value: { type: String, required: [true, "Please provide a value"] },
  },
  user2_transactions: {
    email: { type: String },
    value: { type: String, required: [true, "Please provide a value"] },
  },
  user3_transactions: {
    email: { type: String },
    value: { type: String, required: [true, "Please provide a value"] },
  },
});

const Transaction =
  mongoose.models.transactions ||
  mongoose.model("transactions", transactionSchema);

export default Transaction;

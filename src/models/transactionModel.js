import mongoose, { mongo } from "mongoose";

const userInfoSchema = new mongoose.Schema({
  email: { type: String },
  value: { type: Number },
});
const transactionSchema = new mongoose.Schema({
  group_id: {
    type: String,
  },
  transaction_name: {
    type: String,
  },
  user_transactions: [userInfoSchema],
});

const Transaction =
  mongoose.models.transactions ||
  mongoose.model("transactions", transactionSchema);

export default Transaction;

import mongoose, { mongo } from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a group name"],
  },
  group_id: {
    type: String,
  },
  email: {
    type: String,
  },
  upi_id: {
    type: String,
  },
});

const Member =
  mongoose.models.members || mongoose.model("members", memberSchema);

export default Member;

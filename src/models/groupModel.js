import mongoose, { mongo } from "mongoose";

const groupSchema = new mongoose.Schema({
  groupname: {
    type: String,
    required: [true, "Please provide a group name"],
  },
  groupdescription: {
    type: String,
  },
});

const Group = mongoose.models.groups || mongoose.model("groups", groupSchema);

export default Group;

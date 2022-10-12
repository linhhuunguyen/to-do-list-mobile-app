import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;

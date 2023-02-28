import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);

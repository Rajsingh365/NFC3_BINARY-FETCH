import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    description: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    coverImg: {
      type: String,
      default: "",
    },
    gameInfo: [
      {
        gameName: { type: String, required: true },
        gameId: { type: String, required: true },
        gameExpertise: { type: String, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

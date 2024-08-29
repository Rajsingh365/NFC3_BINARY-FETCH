import mongoose from "mongoose";
import 'dotenv/config'
export default async function connectDb() {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

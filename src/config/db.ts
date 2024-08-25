// Db config goes here..
import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

const MONGO_URI = process.env.DB_REMOTE || "";

const connectDB = async () => {
  console.log(MONGO_URI)
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB Connected...");
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to", db.connection.db.namespace);
  } catch (error) {
    console.error(error);
  }
};

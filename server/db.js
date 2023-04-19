import mongoose from "mongoose";
import dotenv from 'dotenv';
//to commitsg

dotenv.config();
const { MONGODB_URI } = process.env;

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to", db.connection.db.namespace);
  } catch (error) {
    console.error(error);
  }
};

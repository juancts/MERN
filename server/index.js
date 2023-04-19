import express from "express";
import postsRoutes from "../server/routes/post.routes.js";
import { connectDb } from "./db.js";
const app = express();

//conection to mongodb
connectDb();


app.use("/", postsRoutes);

app.listen(4000);
console.log("server listen on port", 4000);

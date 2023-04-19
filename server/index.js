import express from "express";
import postsRoutes from "../server/routes/post.routes.js";
import { connectDb } from "./db.js";
import { PORT } from "./config.js";

const app = express();

//conection to mongodb
connectDb();


app.use("/", postsRoutes);

app.listen(PORT);
console.log("server listen on port", PORT);

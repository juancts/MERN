import express from "express";
import postsRoutes from "../server/routes/post.routes.js";


const app = express();

//Middleware
app.use(express.json());

//routes
app.use("/", postsRoutes);

export default app
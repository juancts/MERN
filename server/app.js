import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from "../server/routes/post.routes.js"
import cors from "cors"


const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './upload'
}))

//routes
app.use("/", postsRoutes);

export default app
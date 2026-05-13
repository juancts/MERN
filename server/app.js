import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from "../server/routes/post.routes.js";
import cors from "cors";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './upload'
}))

//routes
app.use("/", postsRoutes);

app.use(express.static(join(__dirname, "public")));

export default app
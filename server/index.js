import { connectDb } from "./db.js";
import { PORT } from "./config.js";
import app from "./app.js";

//conection to mongodb
connectDb();

app.listen(PORT);
console.log("server listen on port", PORT);

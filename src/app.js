import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/DB.js";
import shortUrl from "../models/shorturl.model.js";
import short_url from "./routes/short_url.route.js"


configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/create", short_url);  

app.listen(PORT, () => {
    connectDB();
    console.log(`Server runing on: ${PORT}`)
});
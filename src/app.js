import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/DB.js";


configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(PORT, () => {
    connectDB();
    console.log(`Server runing on: ${PORT}`)
});
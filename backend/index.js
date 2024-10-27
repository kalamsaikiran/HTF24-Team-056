import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import user from "./routes/user.js"
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(
    cors()
);


app.use('/user', user);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));


app.listen(PORT, () => {
    console.log("Working on", PORT);
});


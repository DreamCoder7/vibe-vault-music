import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import router from "./song/route";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/songs", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

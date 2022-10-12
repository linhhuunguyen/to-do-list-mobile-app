import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import router from "./routes/index.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(cookieParser());

// CONNECT DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

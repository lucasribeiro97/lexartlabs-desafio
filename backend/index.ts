import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import sequelize from "./src/database/models/index";
const express = require("express");
const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Server is up and running");
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});

sequelize.authenticate().then(() => {
  console.log("Database connected");
}).catch((err: Error) => {
  console.log("Error: ", err);
});

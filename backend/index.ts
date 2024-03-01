import { Request, Response } from "express";
const express = require("express");
const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Server is up and running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

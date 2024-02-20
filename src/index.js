// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB.URI}/${DB_NAME}`);
    app.on("err", (err) => {
      console.log("ERROR : ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("ERROR : ", err);
    throw err;
  }
})();
*/

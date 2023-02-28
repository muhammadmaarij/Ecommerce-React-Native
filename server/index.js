import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import UserRouter from "./routes/User.js";
import ProductsRouter from "./routes/Products.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//User router
app.use("/User", UserRouter);

app.use("/Products", ProductsRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .set("strictQuery", true)
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, function () {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

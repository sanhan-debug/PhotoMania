import express from "express";
import dotenv from "dotenv";
import {connect} from "mongoose";
import { pageRouter } from "./Routers/pageRouters.js";
import { registerRoute } from "./Routers/usersRoute.js";
import cookieParser from 'cookie-parser'

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.URI;
// Connect to the DB

// ejs template engine
app.set("view engine", "ejs");

// static files middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// get
app.use("/", pageRouter);

app.use("/about", pageRouter);

app.use("/photos/", pageRouter);

app.use("/users/", registerRoute);

app.listen(PORT, () => {
  console.log(`Server up is on : ${PORT}`);

  connect(URI).then(() => {
    console.log("Connected to the mongodb successfully");
  });
});

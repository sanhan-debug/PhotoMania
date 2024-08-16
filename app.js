import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import { pageRouter } from "./Routers/pageRouters.js";
import { registerRoute } from "./Routers/usersRoute.js";
import cookieParser from "cookie-parser";
import { chekUser } from "./Middlewares/authmiddleware.js";
import fileUpload from "express-fileupload";
import { v2 as clodinary} from 'cloudinary'

const app = express();
dotenv.config();
clodinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET,
})




const PORT = process.env.PORT;
const URI = process.env.URI;
// Connect to the DB

// ejs template engine
app.set("view engine", "ejs");

// static files middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({useTempFiles:true}))

// get
app.use("*", chekUser);

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

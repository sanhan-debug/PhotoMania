import { Router } from "express";
import {
  getAboutPage,
  getContactPage,
  getIndexPage,
  getLoginPage,
  getLogout,
  getRegisterPage,
  getServicesPage,
} from "../Services/getPages.js";
import {
  createPhoto,
  deletePhoto,
  getAllPhoto,
  getAPhoto,
  uptadePhoto,
} from "../Services/photoServices.js";
import { getAllUsers } from "../Services/userService.js";



export const pageRouter = new Router();
// Get
pageRouter.get("/",getIndexPage);
pageRouter.get("/about", getAboutPage);
pageRouter.get("/photos", getAllPhoto);
pageRouter.get("/users",getAllUsers );
pageRouter.get("/contact", getContactPage);
pageRouter.get("/services", getServicesPage);
pageRouter.get("/register", getRegisterPage);
pageRouter.get("/login", getLoginPage);
pageRouter.get("/logout", getLogout);
pageRouter.get("/:id", getAPhoto);

// Post
pageRouter.post("/", createPhoto);

// delete
pageRouter.delete('/:id',deletePhoto)

// put
pageRouter.put('/:id',uptadePhoto)
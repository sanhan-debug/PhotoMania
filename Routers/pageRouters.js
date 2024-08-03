import { Router } from "express";
import {
  getAboutPage,
  getBlogPage,
  getContactPage,
  getIndexPage,
  getLoginPage,
  getProjectsPage,
  getRegisterPage,
  getServicesPage,
} from "../Services/getPages.js";
import {
  createPhoto,
  getAllPhoto,
  getAPhoto,
} from "../Services/photoServices.js";
import { createUser } from "../Services/userService.js";

export const pageRouter = new Router();
// Get
pageRouter.get("/", getIndexPage);
pageRouter.get("/about", getAboutPage);
pageRouter.get("/photos", getAllPhoto);
pageRouter.get("/blog", getBlogPage);
pageRouter.get("/projects", getProjectsPage);
pageRouter.get("/contact", getContactPage);
pageRouter.get("/services", getServicesPage);
pageRouter.get("/register", getRegisterPage);
pageRouter.get('/login',getLoginPage)
pageRouter.get("/:id", getAPhoto);

// Post
pageRouter.post("/", createPhoto);
pageRouter.post('/register',createUser)

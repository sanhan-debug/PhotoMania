import { Router } from "express";
import {
  getAboutPage,
  getContactPage,
  getIndexPage,
  getLoginPage,
  getLogout,
  getRegisterPage,
  getServicesPage,
  sendMail,
} from "../Services/getPages.js";
import {
  createPhoto,
  deletePhoto,
  getAllPhoto,
  getAPhoto,
  uptadePhoto,
} from "../Services/photoServices.js";
import { getAllUsers } from "../Services/userService.js";
import { Photo } from "../Models/photoModel.js";



export const pageRouter = new Router();
// Get
pageRouter.get("/",getIndexPage);

pageRouter.get("/about",(req, res) => {
  res.render("about", { link: "about" });
})

pageRouter.get("/photos", async (req, res) => {
  try {
    const photos = res.locals.user
      ? await Photo.find({ user: { $ne: res.locals.user._id } })
      : await Photo.find();
    res.status(200).render("photos", { photos, link: "photos" });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
})
pageRouter.get("/users",getAllUsers );
pageRouter.get("/contact", getContactPage);
pageRouter.get("/services", getServicesPage);
pageRouter.get("/register", getRegisterPage);
pageRouter.get("/login", getLoginPage);
pageRouter.get("/logout", getLogout);
pageRouter.get("/:id", getAPhoto);

// Post
pageRouter.post("/", createPhoto);
pageRouter.post('/contact',sendMail)

// delete
pageRouter.delete('/:id',deletePhoto)

// put
pageRouter.put('/:id',uptadePhoto)
import { Router } from "express";
import { getAboutPage, getBlogPage, getContactPage, getIndexPage, getProjectsPage, getServicesPage } from "../Services/getPages.js";
import { createPhoto, getAllPhoto }from "../Services/photoServices.js";


export const pageRouter = new Router()


pageRouter.get('/',getIndexPage)
pageRouter.get('/about',getAboutPage)
pageRouter.get('/photos')
pageRouter.get('/blog',getBlogPage)
pageRouter.get('/projects',getProjectsPage)
pageRouter.get('/contact',getContactPage)
pageRouter.get('/services',getServicesPage)
pageRouter.post('/',createPhoto)
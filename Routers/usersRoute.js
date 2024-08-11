import { Router } from "express";
import { createUser, getDashboardPage, loginUser } from "../Services/userService.js";
import { authenticateToken } from "../Middlewares/authmiddleware.js";


export const registerRoute = new Router()


registerRoute.post('/login',loginUser)
registerRoute.post('/register',createUser)
registerRoute.get('/dashboard',authenticateToken,getDashboardPage)

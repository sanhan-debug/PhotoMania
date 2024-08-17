import { Router } from "express";
import { createUser, getAllUsers, getAUser, getDashboardPage, loginUser } from "../Services/userService.js";
import { authenticateToken } from "../Middlewares/authmiddleware.js";


export const registerRoute = new Router()


registerRoute.post('/login',loginUser)
registerRoute.post('/register',createUser)
registerRoute.get('/dashboard',authenticateToken,getDashboardPage)
registerRoute.get('/',authenticateToken,getAllUsers)
registerRoute.get('/:id',authenticateToken,getAUser)


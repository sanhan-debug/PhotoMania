import { Router } from "express";
import { createUser, follow, getAllUsers, getAUser, getDashboardPage, loginUser, unfollow } from "../Services/userService.js";
import { authenticateToken } from "../Middlewares/authmiddleware.js";


export const registerRoute = new Router()


registerRoute.post('/login',loginUser)
registerRoute.post('/register',createUser)
registerRoute.get('/dashboard',authenticateToken,getDashboardPage)
registerRoute.get('/',authenticateToken,getAllUsers)
registerRoute.get('/:id',authenticateToken,getAUser)
registerRoute.put('/:id/follow',authenticateToken,follow)
registerRoute.put('/:id/unfollow',authenticateToken,unfollow)


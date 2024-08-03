import { Router } from "express";
import { createUser, loginUser } from "../Services/userService.js";


export const registerRoute = new Router()


registerRoute.post('/login',loginUser)
registerRoute.post('/register',createUser)

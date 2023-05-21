import { Router } from "express";
import { validateSignUp, validateLogin } from "../middlewares/login.middleware.js";
import { postSignUp, postLogin } from "../controllers/sign.controllers.js";


const signRouter = Router();

signRouter.post("/signup", validateSignUp, postSignUp)
signRouter.post("/singin", validateLogin, postLogin)

export default signRouter;
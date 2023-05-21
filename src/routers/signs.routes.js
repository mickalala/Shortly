import { Router } from "express";
import { validateSignUp } from "../middlewares/login.middleware.js";
import { postSignUp } from "../controllers/sign.controllers.js";

const signRouter=Router();

signRouter.post("/signup",validateSignUp, postSignUp)
signRouter.post("/signin")

export default signRouter;
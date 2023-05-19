import { Router } from "express";
import { validateSignUp } from "../middlewares/signUp.middleware.js";
import { signUpSchema } from "../schemas/signUp.schema.js";

const signRouter=Router();

signRouter.post("/signup")
signRouter.post("/signin")

export default signRouter;
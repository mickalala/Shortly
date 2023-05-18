import { Router } from "express";
import { validateSignUp } from "../middlewares/signUp.middleware.js";
import { sigUpSchema } from "../schemas/signUp.schema.js";

const signRouter=Router();

signRouter.post("/signup",validateSignUp(sigUpSchema),)
signRouter.post("/signin",)

export default signRouter;
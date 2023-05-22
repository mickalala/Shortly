import { Router } from "express";
import { tokenValidation } from "../middlewares/token.middleware.js";

const userRouter= Router();

userRouter.get("/users/me", tokenValidation,)
export default userRouter;
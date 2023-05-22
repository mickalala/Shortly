import { Router } from "express";
import { tokenValidation } from "../middlewares/token.middleware.js";
import { sendUsersInformations } from "../controllers/users.controllers.js";

const userRouter= Router();

userRouter.get("/users/me", tokenValidation,sendUsersInformations)
export default userRouter;
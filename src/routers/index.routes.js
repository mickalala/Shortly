import { Router } from "express";
import signRouter from "./signs.routes.js";

const indexRouter= Router()

indexRouter.use(signRouter)

export default indexRouter
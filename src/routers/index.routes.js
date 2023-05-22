import { Router } from "express";
import signRouter from "./signs.routes.js";
import urlRouter from "./urls.routes.js";

const indexRouter= Router()

indexRouter.use(signRouter)
indexRouter.use(urlRouter)

export default indexRouter
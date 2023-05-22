import { Router } from "express";
import signRouter from "./signs.routes.js";
import urlRouter from "./urls.routes.js";
import userRouter from "./users.routes.js";
import rankingRouter from "./ranking.routes.js";

const indexRouter= Router()

indexRouter.use(signRouter)
indexRouter.use(urlRouter)
indexRouter.use(userRouter)
indexRouter.use(rankingRouter)

export default indexRouter
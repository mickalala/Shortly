import { Router } from "express";
import { tokenValidation } from "../middlewares/token.middleware.js";
import { returnShortUrl } from "../controllers/url.controllers.js";

const urlRouter= Router();

urlRouter.post("/urls/shorten", tokenValidation,returnShortUrl)
urlRouter.get("/urls/:id")
urlRouter.get("/urls/open/:shortUrl")
urlRouter.delete("/urls/:id",tokenValidation,)

export default urlRouter
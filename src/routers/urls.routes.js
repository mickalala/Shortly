import { Router } from "express";
import { tokenValidation } from "../middlewares/token.middleware.js";
import { returnShortUrl , returnAllUrls, deleteUrl, redirectUser} from "../controllers/url.controllers.js";

const urlRouter= Router();

urlRouter.post("/urls/shorten", tokenValidation,returnShortUrl)
urlRouter.get("/urls/:id",returnAllUrls)
urlRouter.get("/urls/open/:shortUrl", redirectUser)
urlRouter.delete("/urls/:id",tokenValidation,deleteUrl)

export default urlRouter
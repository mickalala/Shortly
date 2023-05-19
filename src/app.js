import express from "express"
import cors from "cors"

import indexRouter from "./routers/index.routes.js"

const app= express()

app.use(cors())
app.use(express.json())

app.use(indexRouter)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`tá na portaaaaa:::::  ${port}`))
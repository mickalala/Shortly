import express from express

import indexRouter from "./routers/index.route.js"

const app= express()

app.use(indexRouter)

const PORT =500
app.listen(PORT,()=>console.log(`tá na portaaaaa:::::  ${PORT}`))
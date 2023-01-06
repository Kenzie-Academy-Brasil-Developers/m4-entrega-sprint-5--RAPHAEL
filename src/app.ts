import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRouter } from "./routes/users.routes"
import handleError from "./errors/handleError"
import loginRouter from "./routes/login.routes"
import categoriesRoutes from "./routes/categories.routes"
import propertiesRoutes from "./routes/properties.routes"
import schedulesRoutes from "./routes/schedule.routes"

const app = express()
app.use(express.json())

app.use("/users", usersRouter)
app.use("/login", loginRouter)
app.use("/categories", categoriesRoutes)
app.use("/properties", propertiesRoutes)
app.use("/schedules", schedulesRoutes)

app.use(handleError)

export default app
import express from "express"
import fs from "fs"
import https from "https"
import dotenv from "dotenv"
import v1 from "./src/routes"
import mongoose from "mongoose"
import { routeHandler } from "./src/middleware"
dotenv.config()

const PORT = process.env.PORT
const PRIVATE_KEY = process.env.PRIVATE_KEY!
const PRIVATE_CERT = process.env.PRIVATE_CERT!
const MONGO_URI = process.env.MONGO_URI!

const key = fs.readFileSync(PRIVATE_KEY)
const cert = fs.readFileSync(PRIVATE_CERT)

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.log("There was an error while connecting to MongoDB", error)
  )

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/app/v1", v1)

// Route Not Found Handler
app.all("*", routeHandler)

// Create HTTPS server
https.createServer({ key, cert }, app).listen(PORT, () => {
  console.log(`Server listening on https://localhost:${PORT}`)
})

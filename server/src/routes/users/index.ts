import express, { Router } from "express"
import { getUserById } from "../../controllers/user"

const users: Router = express.Router()

//#region "GET"
users.get("/:id", getUserById)
//#endregion "GET"

//#region "POST"
//#endregion "POST"

export default users

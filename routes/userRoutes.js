const express = require("express")

const userRoute = express.Router()
const { createUser , deleteUser ,  getUserById , updateUser, getAllUsers 
} = require("../Controller/userController.js")

userRoute.post("/new-user",createUser)
userRoute.get("/get-one-user/:id", getUserById)
userRoute.delete("/delete-user/:id", deleteUser)
userRoute.patch("/update-user/:id", updateUser)
userRoute.get("/all-users", getAllUsers)

module.exports = userRoute

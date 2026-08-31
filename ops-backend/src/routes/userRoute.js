import { getUsers } from "../controllers/userController.js";
import express from "express";
const userRoute = express.Router(); 

userRoute.get('/', getUsers);

export default userRoute;


// import { getUsers } from "../controllers/userController.js";
import { getSuppliers } from "../controllers/supplierController.js";
import express from "express";
const supplierRoute = express.Router(); 

supplierRoute.get('/', getSuppliers);

export default supplierRoute;


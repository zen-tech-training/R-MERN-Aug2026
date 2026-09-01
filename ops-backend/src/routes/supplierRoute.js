// Filepath: src/routes/supplierRoute.js
import { getSuppliers, insertSupplier, removeSupplierByName } from "../controllers/supplierController.js";
import express from "express";
const supplierRoute = express.Router(); 

supplierRoute.get('/', getSuppliers);
supplierRoute.post('/', insertSupplier);
supplierRoute.delete("/:name", removeSupplierByName);  //Request parameter

export default supplierRoute;
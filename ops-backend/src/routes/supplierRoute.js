// Filepath: src/routes/supplierRoute.js
import { getSuppliers, insertSupplier, updateSupplier, removeSupplierByName } from "../controllers/supplierController.js";
import express from "express";
const supplierRoute = express.Router(); 

supplierRoute.get('/', getSuppliers);
supplierRoute.post('/', insertSupplier);
supplierRoute.put('/', updateSupplier);
supplierRoute.delete("/:name", removeSupplierByName);  //Request route parameter

export default supplierRoute;
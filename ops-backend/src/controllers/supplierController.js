// Filepath: src/controllers/supplierController.js
import { getAllSuppliers, addSupplier, deleteSupplierByName } from '../services/supplierService.js'

const getSuppliers = async (req, res) => {
    try {
        const suppliers = await getAllSuppliers();
        console.log("I am in supplierController");
        console.log(suppliers);
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const insertSupplier = async(req, res) =>{
    try {
        // const supplier = await addSupplier();
        console.log(req.body);
        const supplier = await addSupplier(req.body.name, req.body.address);
        console.log("I am in supplierController");
        console.log(supplier);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const removeSupplierByName = async(req, res) =>{
    try {
        console.log(req.params);
        const result = await deleteSupplierByName(req.params.name);  //Retrieve the data from request parameter
        console.log("I am in supplierController");
        console.log(result);   
        // { acknowledged: true, deletedCount: 1 } Or { acknowledged: true, deletedCount: 0 }
        if(result.deletedCount==1) res.status(204).send();
        else  res.status(404).send();
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { getSuppliers, insertSupplier, removeSupplierByName };


//To pass the data from the fron-end application
//1. Request body, 2. Request Route Params, 3. Request query string, 4. Request Headers
//Delete operation - HTML Table
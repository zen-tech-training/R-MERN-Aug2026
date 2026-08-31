// import { getAllUsers } from "../services/userService.js";
import { getAllSupplier } from '../services/supplierService.js'


const getSuppliers = async (req, res) => {
    try {
        const suppliers = await getAllSupplier();
        console.log("I am in supplierController");
        console.log(suppliers);
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getSuppliers };

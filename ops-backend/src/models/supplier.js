import mongoose from 'mongoose';
const supplierSchema = new mongoose.Schema({
        name: { type: String, required: true },
        address:{ type: String, required: true },        
    },
    {
        timestamps: true // Automatically creates createdAt and updatedAt fields
    })
const supplier = mongoose.model('Supplier', supplierSchema); 
//Auto Supplier -> Suppliers collection
//Singular -> Plural
export default supplier;
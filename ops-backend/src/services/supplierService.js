import supplier from "../models/supplier.js";

const getAllSuppliers  = () => supplier.find();
// ODM query that will fetch the documents from suppliers collection
// const getAllSupplier = () => supplier.find({address:"Japan"}); 

// const addSupplier = () => supplier.insertOne({name:"S4", address:"Delhi"});
const addSupplier = (name, address) => supplier.insertOne({name:name, address:address});

const modifySupplier = (name, address) => supplier.updateOne({name:"S2"}, {name:name, address:address})
//db.suppliers.updateOne({name:"S2"}, {$set:{address:"Hyderabad"}})

// const deleteSupplierByName = (name) => supplier.deleteOne({name:"S4"}); //Delets the first matching record
const deleteSupplierByName = (name) => supplier.deleteOne({name:name}); //Delets the first matching record

export {getAllSuppliers, addSupplier, modifySupplier, deleteSupplierByName}
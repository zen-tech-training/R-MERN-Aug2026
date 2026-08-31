import supplier from "../models/supplier.js";
const getAllSupplier = () => supplier.find();  
// ODM query that will fetch the documents from suppliers collection

// const getAllSupplier = () => supplier.find({address:"Japan"});  

export {getAllSupplier}
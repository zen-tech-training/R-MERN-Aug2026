import express from "express";
import  {getProductData} from "../services/productService.js"; //ECMA SCript
// const abc = require("../services/productService");

// export const productRoute = express.Router();  //named export
const productRoute = express.Router(); 

productRoute.get('/simple-product', (req,res,next)=> {
    console.log("Product fetching ");
    res.status(200).json({msg:"GET - I am in productRoutes.js file"});
    // next();   //control will pass to the matching route handler i.e. present in your index.js
});

productRoute.get('/product', async(req,res)=> {
    // console.log("I am in GET productRoutes.js")
    const result = getProductData();
    // const result = await getProductData();
    console.log(result);
    res.send(result);
});


export default productRoute;                      //default export

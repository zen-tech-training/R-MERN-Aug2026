import express from "express";

// export const productRoute = express.Router();  //named export
const productRoute = express.Router(); 

productRoute.get('/product', (req,res,next)=> {
    console.log("Product fetching ");
    res.status(200).json({msg:"GET - I am in productRoutes.js file"});
    // next();   //control will pass to the matching route handler i.e. present in your index.js
});

export default productRoute;                      //default export

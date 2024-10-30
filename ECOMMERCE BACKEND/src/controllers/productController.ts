// import { Request, Response } from "express";
// import Product from "../database/models/productTableModel";




// class ProductController{
//     public static async registerProduct(req:Request, res:Response):Promise<void>{

//         const {productName, productPrice, productDescription} = req.body
//         if(!productName || !productPrice || !productDescription){
//             res.status(400).json({
//                 message : "Please Provide productname, productPrice, productDescription Correctly!"
//             })
//             return
//         }
//             await Product.create({
//                 productName : productName,
//                 productPrice : productPrice,
//                 productDescription : productDescription
//             })
//             res.status(200).json({
//                 message : "Product registered Successfully"
//             })
//     } 
// }
// export default ProductController
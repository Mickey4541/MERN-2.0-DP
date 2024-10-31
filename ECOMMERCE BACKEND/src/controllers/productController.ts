import { Request, Response } from "express";
// import Product from "../database/models/productTableModel";

import Product from "../database/models/productTableModel";


class ProductController{
    async registerProduct(req:Request, res:Response):Promise<void>{

        const {productName, productPrice, productDescription, productTotalStockQty} = req.body
        let fileName;
        if(req.file){
            fileName = req.file.filename
        }else{
            fileName = "./src/uploads/default_image.png"
        }
        if(!productName || !productPrice || !productDescription || !productTotalStockQty){
            res.status(400).json({
                message : "Please Provide productname, productPrice, productDescription, productQuantity Correctly!"
            })
            return
        }
            await Product.create({
                productName : productName,
                productPrice : productPrice,
                productDescription : productDescription,
                productTotalStockQty : productTotalStockQty,
                productImageUrl : fileName
            })
            res.status(200).json({
                message : "Product registered Successfully"
            })
    } 
}
export default new ProductController()
import { Request, Response } from "express";
// import Product from "../database/models/productTableModel";

import Product from "../database/models/productTableModel";
import { AuthRequest } from "../Middleware/authmiddleware";


class ProductController{
    async registerProduct(req:AuthRequest, res:Response):Promise<void>{ //yo AuthRequest aauta interface ho. yo authmiddleware.ts bata export vako xa ra yaha import gareko.

        const userId = req.user?.id //Authrequest import gareko xam, req:AuthRequest pani use vako xa mathi ani tala product.create maa balla userId maa use gareko xam userId lai.

        const {productName, productPrice, productDescription, productTotalStockQty,categoryId} = req.body
        let fileName;
        if(req.file){
            fileName = req.file.filename
        }else{
            fileName = "./src/uploads/default_image.png"
        }
        if(!productName || !productPrice || !productDescription || !productTotalStockQty || !categoryId){
            res.status(400).json({
                message : "Please Provide productname, productPrice, productDescription, productQuantity, categoryId Correctly!"
            })
            return
        }
            await Product.create({
                productName : productName,
                productPrice : productPrice,
                productDescription : productDescription,
                productTotalStockQty : productTotalStockQty,
                productImageUrl : fileName,
                userId : userId,//authmiddleware.ts file maa req.user maa user ko id ra aru details aai rako xa. 
                categoryId : categoryId
            })
            res.status(200).json({
                message : "Product registered Successfully"
            })
    } 
}
export default new ProductController()
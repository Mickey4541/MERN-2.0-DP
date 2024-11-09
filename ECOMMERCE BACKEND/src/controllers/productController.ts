import { Request, Response } from "express";
// import Product from "../database/models/productTableModel";

import Product from "../database/models/productTableModel";
import { AuthRequest } from "../Middleware/authmiddleware";
import User from "../database/models/userModel";
import Category from "../database/models/Category";
import { Model } from "sequelize";


class ProductController{
    async registerProduct(req:AuthRequest, res:Response):Promise<void>{ //yo AuthRequest aauta interface ho. yo authmiddleware.ts bata export vako xa ra yaha import gareko.

        const userId = req.user?.id //Authrequest import gareko xam, req:AuthRequest pani use vako xa mathi ani tala product.create maa balla userId maa use gareko xam userId lai.

        const {productName, productPrice, productDescription, productTotalStockQty,categoryId} = req.body
        let fileName;
        if(req.file){
            fileName = req.file.filename
        }else{
            fileName = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww"
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



    //getAllProduct:::::::::;
    async getAllProducts(req:Request, res:Response):Promise<void>{
        const data = await Product.findAll({
            include : [
                {//yesle user ra product lai join garxa...
                    model : User, //yo code ley k garyo vandaa product vanni maa sabai kuraa find garyo ra tyo find gareko data maa kunai kura user table sanga relation maa xa vane product table lai user table sanga join garidiyo. yesto gardaa kun product ko user ley create gareko ho sabai nikalna sakni vayim hamile.
                    attributes : ['id', 'email', 'username'] //model : User ley sabai kura dini vayo tara if hamilai tyo product create gareko user ko email matra chhiyo yaa kei specific kuraharu chhiyo vani attribute use garna sakxau.
                },
                {//yesle product ra category lai join garxa...
                    model : Category,
                    attributes : ['id', 'categoryName']
                }
            ]
        }) //return array
        res.status(200).json({
            message : "Products fetched Successfully",
            data : data
        })

    }

    //getSingleProduct
    async getSingleProduct(req:Request, res:Response):Promise<void>{
        const id = req.params.id
        const data = await Product.findAll({
            where : {
                id : id
            },
            include : [ //joining the user table and category table.
                {
                model : User,
                attributes : ['id', 'email', 'username']
            },
            {
                model : Category,
                attributes : ['id', 'categoryName']
            }
        ]
        })
        if(data.length == 0){
            res.status(404).json({
                message : "No product with that id"
            })
        }else{
            res.status(200).json({
                message : "Product fetched successfully",
                data : data
            })
        }
    }


    //DeleteProduct
    async deleteProduct(req:Request, res:Response):Promise<void>{
        const {id} = req.params
        const data = await Product.findAll({
            where : {
                id : id
            }
        })
        if(data.length > 0){
            await Product.destroy({
                where :{
                    id : id
                }
            })
            res.status(200).json({
                message : "Product Deleted Successfully."
            })
        }else{
            res.status(404).json({
                message : "No product with that id"
            })
        }

    }


    //UpdateProduct
    async updateProduct(req:Request, res:Response):Promise<void>{
        const id  = req.params.id
        console.log(id);
        
        const {productName, productDescription, productTotalStockQty, productPrice} = req.body
        
        const data = await Product.findAll({
            where : {
                id :id
            }
        })
        if(data.length > 0){
            await Product.update({
                productName : productName,
                productDescription : productDescription,
                productTotalStockQty : productTotalStockQty,
                productPrice : productPrice
            },{
                where : {
                    id : id
                }
            })
            res.status(200).json({
                message : "Product updated successfully"
            })
        }else{
            res.status(404).json({
                message : "No product with that id to update."
            })
        }
    }
}
export default new ProductController()
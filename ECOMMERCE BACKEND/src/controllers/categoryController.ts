//category admin ley banauni hoina pahile nai category hunxan, tei pahile nai vayeko category maa balla admin ley category select garera product halni ho. tesko lagi jaba hamro project suru hunxa tei bela nai category haru seed garera pahile nai rakhidina paryo taba admin ley tei category select garera product site maa halna sakyo.

import Category from "../database/models/Category";
import { Request, Response } from "express";

class CategoryController {
    categoryData = [
        {
        categoryName: "Electornics"
        },
        {
            categoryName : "Groceries"
        },
        {
            categoryName : "Food/Beverages"
        }
    ];


    
    async seedCategory():Promise<void>{
        const datas = await Category.findAll()
        if(datas.length === 0){
            const data = await Category.bulkCreate(this.categoryData)
            console.log("Categories Seeded Successfully");
        }else{
            console.log("Categories already Seeded.");
            
        }
        
    }


    async addCategory(req:Request, res:Response):Promise<void>{
        const { categoryName } = req.body
        if(!categoryName){
            res.status(400).json({
                message : "please provide categoryName."
            })
            return
        }
        await Category.create({
            categoryName : categoryName
        })
        res.status(200).json({
            message : "Category Added Successfully"
        })
    }



    async getCategory(req:Request, res:Response):Promise<void>{
        const data = await Category.findAll()
        res.status(200).json({
            message : "Categories fetched.",
            data : data
        })
    }

    //single ko aahile hamilai need xaina kinaki categroy ko column aahile categoryName matra banako xam, paxi banauna milyo.


    async deleteCategory(req:Request, res:Response):Promise<void>{
        const {id} = req.params
        const data  = await Category.findAll({
            where : {
                id : id
            }
        })
        if(data.length  === 0){
            res.status(400).json({
                message : "No category with that id"
            })
        }else{
            await Category.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).json({
                message : "category Deleted"
            })
        }
    }


    async updateCategory(req:Request, res:Response):Promise<void>{
        const {id} = req.params
        const {categoryName} = req.body
        await Category.update({categoryName},{
            where : {
                id : id
            }
        })
        res.status(200).json({
            message : "Category Updated."
        })
    }
}
export default new CategoryController()
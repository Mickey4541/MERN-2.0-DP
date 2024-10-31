//category admin ley banauni hoina pahile nai category hunxan, tei pahile nai vayeko category maa balla admin ley category select garera product halni ho. tesko lagi jaba hamro project suru hunxa tei bela nai category haru seed garera pahile nai rakhidina paryo taba admin ley tei category select garera product site maa halna sakyo.

import Category from "../database/models/Category";


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
}
export default new CategoryController()
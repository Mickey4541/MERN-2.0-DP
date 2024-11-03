import { Request,Response } from "express";
import { AuthRequest } from "../Middleware/authmiddleware";
import Cart from "../database/models/Cart";
import Product from "../database/models/productTableModel";
import Category from "../database/models/Category";



// interface CartData{
    
//         id : string,
//         quantity :  Number,
//         createdAt : string,
//         updatedAt : string,
//         userId : string,
//         productId : string
// }

class CartController{
    async addToCart(req:AuthRequest,res:Response):Promise<void>{
        const userId = req.user?.id //authmiddleware.ts bata req.user = userdata aako ani aaha use garako ho.
        const { quantity, productId} = req.body
        if(!quantity || !productId){
            res.status(400).json({
                message : 'Please provide quantity and productId.'
            })
            return
        }
        //check if the product already exists in the cart table or not.
        let cartItem = await Cart.findOne({
            where : {
                productId : productId,
                userId : userId
            }
        })
        if(cartItem){
            cartItem.quantity += quantity //aahile findone gareko xam, if findall garna laako vaye cartItem[0].quantity += quantity garnu parthiyo.
            await cartItem.save() //database maa add vako quantity pani save garna ko lagi save() garnai parxa.
        }else{
            //Insert into cart table
            cartItem = await Cart.create({
                quantity : quantity,
                userId : userId,
                productId : productId
            })
        }
        res.status(200).json({
            message : "Product added to cart",
            data : cartItem
        })
    }


//get all products from cart::
    async getMyCarts(req:AuthRequest, res:Response):Promise<void>{
        const userId = req.user?.id
        const cartItems = await Cart.findAll({
            where : {
                userId : userId
            },
            include : [
                {
                    model : Product, //caerItems maa product ko data pani join vayera aauxa. just yaha join gareko
                    attributes : ['productPrice', 'productName', 'productDescription', 'productImageUrl'],
                    include : [
                        {
                            model : Category,
                            attributes : ['id', 'categoryName']
                        }
                    ]
                }
            ],
            attributes : ['productId','quantity'] //getting product specific data in cart.
        })
        if(cartItems.length === 0){
            res.status(404).json({
                message : "No item in the cart."
            })
        }else{
            res.status(200).json({
                message : "Cart items fetched successfully",
                data : cartItems
            })
        }
    }


    async deleteMyCartItem(req:AuthRequest, res:Response):Promise<void>{
        const userId = req.user?.id
        const {productId} = req.params
        //check whether above productId product exist or not
        const product = await Product.findByPk(productId)
        if(!product){
            res.status(404).json({
                message : "no product with that Id"
            })
            return
        }
        //delete the product from cart
        await Cart.destroy({
            where : {
                userId :userId,
                productId : productId
            }
        })
        res.status(200).json({
            message : "Product of cart Deleted Successfully"
        })
    }



    async updateCartItem(req:AuthRequest, res:Response):Promise<void> {
        const {productId} = req.params
        const userId = req.user?.id
        const {quantity} = req.body
        if(!quantity){
            res.status(400).json({
                message : 'Please provide quantity'
            })
        }
        const cartData = await Cart.findOne({
            where : {
                userId : userId,
                productId : productId
            }
        })
        if(cartData){
            cartData.quantity = quantity
        await cartData?.save()
        res.status(200).json({
            message : 'Product of cart updated Successfully',
            data : cartData
        })
        }else{
            res.status(404).json({
                message : "No product of that userId"
            })
        }
    }
}
export default new CartController()
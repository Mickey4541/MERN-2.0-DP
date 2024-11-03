import { Response } from "express";
import { AuthRequest } from "../Middleware/authmiddleware";
import { OrderData, PaymentMethod } from "../types/orderTypes";
import payment from "../database/models/payment";
import Order from "../database/models/Order";
import OrderDetail from "../database/models/orderDetails";




class OrderController{
    async createOrder(req:AuthRequest, res:Response):Promise<void>{
        //from orders table
        const userId = req.user?.id
        const {phoneNumber, shippingAddress, totalAmount, paymentDetails, items}:OrderData = req.body// paymentDetails maa paymentTable ko sabai details object maa aauxxa. ani items maa products haru array maa aauxa.(kati xa quantity)
        if(!phoneNumber || !shippingAddress || !totalAmount || !paymentDetails || !paymentDetails.paymentMethod || items.length == 0){//yaha items maa !items garera check garna mildaina, items vaneko array ho, yo truthy ho so .length ==0 garnu parxa.
            res.status(400).json({
                message : "Please provide phoneNumber, shippingAddress, totalAmount, paymentDetails, items correctly"
            })
            return
        }
        //if data correctly aayo vani tyo data lai respective tables maa lagera halni.Like: order data in order table, payment data in payment table etc. jaba userley checkout garxa hamilai order,payment,orderdetails sabai aairako hunxa. kaha bata aauxa vanda relation xa yeni 3 ota table bichmaa, tri relation ley gardaa.
        const orderData = await Order.create({
            phoneNumber : phoneNumber,
            shippingAddress : shippingAddress,
            totalAmount : totalAmount,
            userId : userId
        })
        await payment.create({
            paymentMethod : paymentDetails.paymentMethod
        })
        //items vanni hamilai array maa aairako hunxa so, each row table maa halnu pardaa loop garera halnu parney hunxa.
        for(var i= 0; i<items.length; i++){
            await OrderDetail.create({
                quantity : items[i].quantity,
                productId : items[0].productId,
                orderId : orderData.id
            })
        }
        if(paymentDetails.paymentMethod === PaymentMethod.khalti){
            //khalti integration
        }else{
            res.status(200).json({
                message : "Order placed successfully"
            })
        }
    }
}
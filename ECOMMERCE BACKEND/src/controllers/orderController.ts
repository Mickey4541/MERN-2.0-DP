import { Response } from "express";
import { AuthRequest } from "../Middleware/authmiddleware";
import { khaltiResponse, OrderData, PaymentMethod, TransactionStatus, TransactionVerificationResponse } from "../types/orderTypes";
import payment from "../database/models/payment";
import Order from "../database/models/Order";
import OrderDetail from "../database/models/orderDetails";
import axios from "axios";




class OrderController{
    async createOrder(req:AuthRequest, res:Response):Promise<void>{
        //from orders table
        const userId = req.user?.id
        // console.log(req.body);
        
        const {phoneNumber, shippingAddress, totalAmount, paymentDetails, items}:OrderData = req.body// paymentDetails maa paymentTable ko sabai details object maa aauxxa. ani items maa products haru array maa aauxa.(kati xa quantity). And the :OrderData used here is a type from orderTypes.ts file.
        if(!phoneNumber || !shippingAddress || !totalAmount || !paymentDetails || !paymentDetails.paymentMethod || items.length == 0){//yaha items maa !items garera check garna mildaina, items vaneko array ho, yo truthy ho so .length ==0 garnu parxa.
            res.status(400).json({
                message : "Please provide phoneNumber, shippingAddress, totalAmount, paymentDetails, items correctly"
            })
            return
        }
        //if data correctly aayo vani tyo data lai respective tables maa lagera halni.Like: order data in order table, payment data in payment table etc. jaba userley checkout garxa hamilai order,payment,orderdetails sabai aairako hunxa. kaha bata aauxa vanda relation xa yeni 3 ota table bichmaa, tri relation ley gardaa.
        
        const paymentData = await payment.create({
            paymentMethod : paymentDetails.paymentMethod
        })
        const orderData = await Order.create({
            phoneNumber : phoneNumber,
            shippingAddress : shippingAddress,
            totalAmount : totalAmount,
            userId : userId,
            paymentId : paymentData.id
        })
        
        //items vanni hamilai array maa aairako hunxa so, each row table maa halnu pardaa loop garera halnu parney hunxa.
        let responseOrderData;
        for(var i= 0; i<items.length; i++){
            responseOrderData = await OrderDetail.create({
                quantity : items[i].quantity,
                productId : items[i].productId,
                orderId : orderData.id
            })
        }
        if(paymentDetails.paymentMethod === PaymentMethod.khalti){
            //khalti integration
            const data = {
                return_url : "http://localhost:3000/success",
                purchase_order_id : orderData.id,
                amount : totalAmount * 100, //khalti accepts payment only on paisa. so, converting into paisa.
                website_url : "http://localhost:3000/",
                purchase_order_name : 'orderName_' + orderData.id
            }
            const response = await axios.post('https://a.khalti.com/api/v2/epayment/initiate/', data,{
                'headers' : {
                    'Authorization' : 'key a1eb4f2a17cb4fb3a8feff76f56031c2'
                }
            })
            console.log("RajanBhandariResponses",response);
            const khaltiResponse:khaltiResponse = response.data
            paymentData.pidx = khaltiResponse.pidx
            paymentData.save()
            res.status(200).json({
                message : "Order Placed successfully nnn",
                url : khaltiResponse.payment_url,
                data : responseOrderData
            })
            // console.log(responseOrderData);
            

        }else{
            res.status(200).json({
                message : "Order placed successfully ooo"
            })
        }
    }

    //verify the transaction:::
    async verifyTransaction(req:AuthRequest, res:Response):Promise<void>{
        const userId = req.user?.id
        const {pidx} = req.body
        if(!pidx){
            res.status(400).json({
                message : "Please provide pidx"
            })
            return
        }
        const response = await axios.post("https://a.khalti.com/api/v2/epayment/lookup/",{pidx:pidx},{
            //here, the response structure after hitting the api is like this:
            // {
            //     "pidx": "HT6o6PEZRWFJ5ygavzHWd5",
            //     "total_amount": 1000,
            //     "status": "Completed",
            //     "transaction_id": "GFq9PFS7b2iYvL8Lir9oXe",
            //     "fee": 0,
            //     "refunded": false
            //  }
            //so, we have to make a interface of TransactionVerificationResponse in orderTypes.ts
            headers : {
                'Authorization' : 'key a1eb4f2a17cb4fb3a8feff76f56031c2'
            }
        })
        const data:TransactionVerificationResponse = response.data
        console.log(data);
        
        if(data.status === TransactionStatus.Completed){
            await payment.update({paymentStatus : 'paid'},{
                where : {
                    pidx : pidx
                }
            })
            res.status(200).json({
                message : "Payment not verified"
            })

            //second method::yeasri ni garna sakio tara complete xaina::
            // let order = await Order.findAll({
            //     where : {
            //         userId : userId
            //     },
            //     include : [ //joining the payment table with order table
            //         {
            //             model : payment
            //         }
            //     ]
            // })
            //console.log(order);
            
        }else{
            res.status(200).json({
                message : "Payment not verified"
            })
        }
    }
}
export default new OrderController()
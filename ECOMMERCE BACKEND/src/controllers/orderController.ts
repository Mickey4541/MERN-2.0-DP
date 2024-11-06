import { Response, Request } from "express";
import { AuthRequest } from "../Middleware/authmiddleware";
import { khaltiResponse, OrderData, OrderStatus, PaymentMethod, PaymentStatus, TransactionStatus, TransactionVerificationResponse } from "../types/orderTypes";
import payment from "../database/models/payment";
import Order from "../database/models/Order";
import OrderDetail from "../database/models/orderDetails";
import axios from "axios";
import Product from "../database/models/productTableModel";




class ExtendedOrder extends Order{ //this class is used in talako changePaymentStatus controller maa
    declare paymentId : string | null
}


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


        /////////////////Customer side code start /////////////////////////////////////

    // aba user ley aafule gareko orders haru herna ko lagi:::
    async fetchMyOrders(req:AuthRequest, res:Response):Promise<void>{
        const userId = req.user?.id //kun user ko ho.
        const orders = await Order.findAll({
            where : {
                userId : userId
            },
            include : [
                {
                    model : payment
                }
            ]
        })
        if(orders.length > 0){
            res.status(200).json({
                message : "Order fetched successfully",
                data : orders
            })
        }else{
            res.status(404).json({
                message : "you haven't ordered anything yet.",
                data : [] //empty data pathaideko...
            })
        }
    }

    //order details. kunai order maa click garepaxi tyo order ko details dekhauna ko lagi:::
    async fetchOrderDetails(req:AuthRequest, res:Response):Promise<void>{
        const orderId = req.params.id//kunai order maa click garepaxi tyo order ko id ni dinxa params maa.
        const orderDetails = await OrderDetail.findAll({
            where: {
                orderId : orderId
            },
            include : [
                {
                    model : Product
                }
            ]
        })
        if(orderDetails.length > 0){
            res.status(200).json({
                message : "OrderDetails fetched successfully",
                data : orderDetails
            })
        }else{
            res.status(404).json({
                message : "No any orderDetails of that id.",
                data : [] //empty data pathaideko...
            })
        }
    }

    //user can cancel order::
    async cancelMyOrder(req:AuthRequest, res:Response):Promise<void>{
        const userId = req.user?.id
        const orderId = req.params.id
        console.log(orderId);
        
        const order:any = await Order.findOne({
            where : {
                userId : userId,
                id : orderId
            }
        })
        if(order?.orderStatus === OrderStatus.Ontheway || order?.orderStatus === OrderStatus.Preparation){
                res.status(200).json({
                message : "You cannot cancel order when it is in Ontheway or prepared."
            })
            return
        }
        const updateResult = await Order.update({
            orderStatus : OrderStatus.Cancelled
            // orderStatus : "cancelled"
        },{
            where : {
                id : orderId
            }
        });
        // console.log(OrderStatus.Cancelled);
        console.log(updateResult);
        
        
        if (updateResult[0] === 0) {
            res.status(400).json({ message: "Order could not be cancelled. Please try again." });
            return;
        }
        res.status(200).json({
            message : "Order has been cancelled successfully.."
        })
    }
        /////////////////Customer side code End /////////////////////////////////////
    ///////////////////////////////// Admin Side code starts here ///////////////////////////////////////////
        //Admin side like admin do the changing ofOrder status :
        async changeOrderStatus(req:Request, res:Response):Promise<void>{
            const orderId = req.params.id
            const orderStatus:OrderStatus = req.body.orderStatus //here :orderStatus is from ordertypes.ts enum code.
            await Order.update({
                orderStatus : orderStatus
            },{
                where : {
                    id : orderId
                }
            })
            res.status(400).json({
                message : 'Order Status updated successfully'
            })
        }



        async changePaymentStatus(req:Request, res:Response):Promise<void>{
            //hamilai paymentStatus update garna parni xa. paymentStatus vanni chai payments table bhitra xa. Frontend vata paymentId pathauna mildaina. Frontend bata order ko orderId aairako hunxa params maa. Tyo orderId order table ko id ho. yo id bata hamile aauta row ko sabai data nikalna sakxau. Tyo row maa paymentId pani xa. Aba tei paymentId lai catch garera tyo paymentId bata Payment table bhitra ko payment status change garna/update garna milxa.
            const orderId = req.params.id
            const paymentStatus:PaymentStatus = req.body.paymentStatus
            const order:any = await Order.findByPk(orderId) //orderId nikaleko
            const extendedOrder : ExtendedOrder = order as ExtendedOrder //treating order as extended order. This is called typeassertion in typescript.
            await payment.update({
                paymentStatus : paymentStatus //ani paymentid bata payment status update gareko
            },{
                where : {
                    id : extendedOrder.paymentId //orderid bata paymentid nikaleko
                }
            })
            res.status(200).json({
                message : `Payment status of orderId ${orderId} updated successfully to ${paymentStatus}`
            })
        }





        async deleteOrder(req:Request, res:Response):Promise<void>{
            const orderId = req.params.id
            //order delete gardaa order ko ta delete hunxa sathai tes order sanga associated order pani delete hunu paryo like from the payment table and orderdetails table.
            const order = await Order.findByPk(orderId)
            const extendedOrder : ExtendedOrder = order as ExtendedOrder //treating order as extended order. This is called typeassertion in typescript.
            if(order){
                await OrderDetail.destroy({
                    where : {
                        orderId : orderId
                    }
                })
                await payment.destroy({
                    where : {
                        id : extendedOrder.paymentId
                    }
                })
                await Order.destroy({
                    where : {
                        id : orderId
                    }
                })
                
                res.status(200).json({
                    message : "Order deleted Successfully"
                })
            }else{
                res.status(404).json({
                    message : "No order with that orderId"
                })
            }
        }
    ///////////////////////////////// Admin Side conde end here ///////////////////////////////////////////

}
export default new OrderController()
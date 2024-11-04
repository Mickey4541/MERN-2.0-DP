//this types interface is used in orderController.ts file for typescript

export interface OrderData{
    phoneNumber : string,
    shippingAddress : string,
    totalAmount : number,
    paymentDetails : {
        paymentMethod : PaymentMethod,//yo paymentmethod tala banako enum bata aako ho.
        paymentStatus?: PaymentStatus,//this is optional, userley firsttime maa pathaudaina or usually form maa aaudaina, paxi ordervaisakepaxi update garni kura ho.
        pidx?: string //this is also optional,pidx pani pahile nai user ley form bata pathaudaina, paxi khalti bata aauxa ani hamile update garnuparxa.
    },
    items : OrderDetails[]
}

//interface for items
export interface OrderDetails{
    quantity : number,
    productId : string
}

export enum PaymentMethod{
    Cod= 'cod',
    khalti = 'khalti'
}

export enum PaymentStatus{
    paid = 'paid',
    Unpaid = 'unpaid'
}





//khalti interface
export interface khaltiResponse{
    pidx : string,
    payment_url : string,
    expires_at : Date | string,
    expires_in : number,
    user_fee : number

}


export interface TransactionVerificationResponse{
    pidx : string,
    total_amount : number,
    status : TransactionStatus, //this Transaction status is enum
    transaction_id : string,
    fee: number,
    refunded : boolean


}

export enum TransactionStatus{
    Completed = 'Completed',
    Refunded = 'Refunded',
    Pending = 'Pending',
    Initiated = 'Initiated'
}

export enum OrderStatus{
    pending = 'pending',
    Cancelled = 'cancelled',
    Ontheway = 'ontheway',
    Delivered = 'delivered',
    Preparation = 'preparation'
}
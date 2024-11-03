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

enum PaymentStatus{
    paid = 'paid',
    Unpaid = 'unpaid'
}
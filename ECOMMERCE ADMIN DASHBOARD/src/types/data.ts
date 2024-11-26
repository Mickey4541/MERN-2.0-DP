import { Status } from "./status"

export interface User{
    id: string,
    email: string,
    username: string,
    createdAt: string
}



export interface Product{
    id?: string,
    productName: string,
    productDescription: string,
    productPrice: number,
    productTotalStockQty: number,
    productImageUrl:string,
    createdAt?: string,
    updatedAt?: string,
    userId: string,
    categoryId: string
    User?: User,
    Category? : Category
}


interface Payment{
    paymentMethod : PaymentMethod
}


export interface ItemDetails{
    productId : string,
    quantity : number
}

export enum PaymentMethod{
    COD = 'cod',
    Khalti = 'khalti'
}

export enum OrderStatus{
    pending = 'pending',
    Delivered = 'delivered',
    Ontheway = 'ontheway',
    Cancel = 'cancelled',
    Preparation = 'preparation',
    All = 'all'
}
export interface OrderData{
    phoneNumber : string,
    shippingAddress : string,
    totalAmount : number,
    paymentDetails : Payment,
    items : ItemDetails[],
    id : string,
    orderStatus : OrderStatus
}
export interface Category{
    id :string,
    categoryName : string
}

export interface InitialState{
    products : Product[], //products vanni key maa Product object ko array
    users : User[],
    orders : OrderData[],
    status : Status,
    categories : Category[],
    singleProduct : Product | null
}
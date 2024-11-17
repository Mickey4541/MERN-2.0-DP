import { Status } from "./status"

export interface User{
    id: string,
    email: string,
    username: string
}

interface Category{
    id : string,
    categoryName: string,

}

export interface Product{
    id: string,
    productName: string,
    productDescription: string,
    productPrice: number,
    productTotalQty: number,
    productImageUrl:string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    categoryId: string
    User: User,
    Category : Category
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

export interface OrderData{
    phoneNumber : string,
    shippingAddress : string,
    totalAmount : number,
    paymentDetails : Payment,
    items : ItemDetails[]
}


export interface InitialState{
    products : Product[], //products vanni key maa Product object ko array
    users : User[],
    orders : OrderData[],
    status : Status,
    singleProduct : Product | null
}
import { Status } from "./types"



interface User{
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


export interface ProductState{
    product : Product[],
    status : Status //status vanni maa Status type ko
    singleProduct : Product | null
}
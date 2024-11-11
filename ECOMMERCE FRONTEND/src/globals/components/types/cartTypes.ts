import { Product } from "./productTypes";
import { Status } from "./types";



export interface CartItem{
    Product : Product,
    quantity : number
}



export interface Cartstate{
    items : CartItem[];
    status : Status
}
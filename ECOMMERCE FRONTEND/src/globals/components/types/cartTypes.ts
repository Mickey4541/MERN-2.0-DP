import { Product } from "./productTypes";
import { Status } from "./types";



export interface CartItem{
    Product : Product,
    Quantity : number
}



export interface Cartstate{
    items : CartItem[];
    status : Status
}
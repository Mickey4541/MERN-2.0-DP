import { Product } from "./productTypes";
import { Status } from "./types";



export interface CartItem{
    product : Product,
    Quantity : number
}



export interface Cartstate{
    items : CartItem[];
    status : Status
}
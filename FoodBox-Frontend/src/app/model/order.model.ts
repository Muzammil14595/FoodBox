import { Cart } from "./cart.model";
import { User } from "./user.mode";

export class Order{
    id:number;
    orderDescription:string;
    user:User;
    cartItems:Cart[];
}
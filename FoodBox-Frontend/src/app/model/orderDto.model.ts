import { Cart } from "./cart.model";

export class OrderDto{
    orderDescription:string;
	cartItems:Cart[];
	customerEmail:string;
	customerName:string;
}
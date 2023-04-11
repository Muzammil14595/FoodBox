import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string = "http://localhost:8082/api/cart"
  constructor(private http:HttpClient) { }

  getAllCartItems(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.baseUrl+"/allCartItems")
  }

  addToCart(cart:Cart){
    return this.http.post(this.baseUrl+"/addToCart", cart);
  }

  getById(id:number):Observable<Cart>{
    return this.http.get<Cart>(this.baseUrl+"/getById/"+id)
  }

  delete(id:number){
    return this.http.delete(this.baseUrl+"/delete/"+id);
  }
}

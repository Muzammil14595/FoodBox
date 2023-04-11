import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order.model';
import { OrderDto } from '../model/orderDto.model';
import { ResponseOrderDto } from '../model/responseOrderDto.mode';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl:string = "http://localhost:8082/api/order"
  constructor(private http:HttpClient) { }

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl+"/allCartItems")
  }

  placeOrder(orderDto:OrderDto){
    return this.http.post(this.baseUrl+"/placeOrder",orderDto)
  }

  getById(id:number):Observable<Order>{
    return this.http.get<Order>(this.baseUrl+"/getById/"+id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string = "http://localhost:8082/api/product"
  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  addProduct(product:Product){
    return this.http.post(this.baseUrl, product);
  }

  getById(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+"/"+id)
  }

  delProduct(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  updProduct(id:number,product:Product){
    return this.http.put(this.baseUrl+"/"+id,product);
  }
}

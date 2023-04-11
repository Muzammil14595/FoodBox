import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent {
cartItems:Cart[];
constructor(private service:CartService){}

ngOnInit(){
  this.service.getAllCartItems().subscribe(x=>this.cartItems=x);
}


}

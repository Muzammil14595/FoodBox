import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allfood',
  templateUrl: './allfood.component.html',
  styleUrls: ['./allfood.component.css']
})
export class AllfoodComponent {
  term:any;
  products:Product[];
  cart:Cart = new Cart();
  constructor(private service:ProductService, private cartService:CartService, private router:Router){}

  ngOnInit(){
    this.service.getAllProducts().subscribe(x=>this.products=x);
  }

  onSubmit(){
    this.cartService.addToCart(this.cart).subscribe(x=>console.log(x));
    alert("Added to Cart")
    this.router.navigate(['allfood']);
  }
}

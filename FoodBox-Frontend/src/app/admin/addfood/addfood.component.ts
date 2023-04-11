import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent {
  product:Product = new Product();
  constructor(private service:ProductService, private router:Router){}

  onSubmit(){
    this.service.addProduct(this.product).subscribe(x=>console.log(x));
    alert("Food added successfully!")
    this.router.navigate(['adminallfood']);
  }
}

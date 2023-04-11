import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminallfood',
  templateUrl: './adminallfood.component.html',
  styleUrls: ['./adminallfood.component.css']
})
export class AdminallfoodComponent {
  term:any;
  products:Product[];
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getAllProducts().subscribe(x=>this.products=x);
  }
}

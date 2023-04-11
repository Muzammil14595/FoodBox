import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product:Product = new Product();
  constructor(private service:ProductService, private actRoute:ActivatedRoute, private router:Router){}
  
  ngOnInit(){
    
  }

  onSubmit(){
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.service.updProduct(Number(id),this.product).subscribe(x=>console.log(x)); 
    this.router.navigate(['adminallfood']);
  }
}

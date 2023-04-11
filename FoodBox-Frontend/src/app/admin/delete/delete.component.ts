import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  product:Product;
  constructor(private service:ProductService,private actRoute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    const id= this.actRoute.snapshot.paramMap.get("id");
    this.service.delProduct(Number(id)).subscribe(resp=>{
      this.router.navigate(['adminallfood']);
    }, error=>console.log(error));
    alert("Food deleted");
  }
}

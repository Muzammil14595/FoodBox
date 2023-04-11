import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-deletecart',
  templateUrl: './deletecart.component.html',
  styleUrls: ['./deletecart.component.css']
})
export class DeletecartComponent {
  cart:Cart;
  constructor(private service:CartService,private actRoute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    const id= this.actRoute.snapshot.paramMap.get("id");
    this.service.delete(Number(id)).subscribe(resp=>{
      this.router.navigate(['viewcart']);
    }, error=>console.log(error));
    alert("Cart deleted");
  }

}

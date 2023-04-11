import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './user/homepage/homepage.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminallfoodComponent } from './admin/adminallfood/adminallfood.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { AddfoodComponent } from './admin/addfood/addfood.component';
import { AllfoodComponent } from './user/allfood/allfood.component';
import { ViewcartComponent } from './user/viewcart/viewcart.component';
import { DeletecartComponent } from './user/deletecart/deletecart.component';
import { PlaceorderComponent } from './user/placeorder/placeorder.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"register",component:RegisterComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"adminallfood",component:AdminallfoodComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"addfood",component:AddfoodComponent},
  {path:"allfood",component:AllfoodComponent},
  {path:"viewcart",component:ViewcartComponent},
  {path:"deletecart/:id",component:DeletecartComponent},
  {path:"placeorder",component:PlaceorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

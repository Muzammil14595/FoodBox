import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminallfoodComponent } from './admin/adminallfood/adminallfood.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { AddfoodComponent } from './admin/addfood/addfood.component';
import { AllfoodComponent } from './user/allfood/allfood.component';
import { ViewcartComponent } from './user/viewcart/viewcart.component';
import { DeletecartComponent } from './user/deletecart/deletecart.component';
import { PlaceorderComponent } from './user/placeorder/placeorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminallfoodComponent,
    EditComponent,
    DeleteComponent,
    AddfoodComponent,
    AllfoodComponent,
    ViewcartComponent,
    DeletecartComponent,
    PlaceorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

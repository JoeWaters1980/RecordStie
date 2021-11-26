import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AccessComponent } from './Components/access/access.component';
import { LoginComponent } from './Components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import {vinylProducts} from '../data/vinylProducts';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AccountComponent } from './Components/account/account.component';
import { CartComponent } from './Components/shop/cart/cart.component';
import { ProductsComponent } from './Components/shop/products/products.component';
import { ShopComponent } from './Components/shop/shop.component';
import { FiltersComponent } from './Components/shop/filters/filters.component';
import { CartItemsComponent } from './Components/shop/cart/cart-items/cart-items.component';
import { ProductItemComponent } from './Components/shop/products/product-item/product-item.component';


/* Adding the routes for navigation */
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'access', component: AccessComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'account', component: AccountComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AccessComponent,
    LoginComponent,
    CheckoutComponent,
    SignUpComponent,
    AccountComponent,
    CartComponent,
    ProductsComponent,
    ShopComponent,
    FiltersComponent,
    CartItemsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    // rubric13 The home page is accessible at http://localhost:8080/#
    path: '',
    component: HomeComponent
  },
  {
    // rubric34 The shopping page is accessible at http://localhost:8080/#/shopping
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    // rubric46 The product page is accessible at http://localhost:8080/#/product?name=productname
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/:category/:subcategory/:name',
    component: ProductComponent
  },
  {
    // rubric56 The cart page is accessible at http://localhost:8080/#/cart
    path: 'cart',
    component: CartComponent
  },
  {
    // rubric62 The contact page is accessible at http://localhost:8080/#/contact
    path: 'contact',
    component: ContactComponent
  },
  {
    // rubric64 The about page is accessible at http://localhost:8080/#/about
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  // rubric13, rubric34, rubric46, rubric56, rubric62, rubric64 enable hash mode for navigate.
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

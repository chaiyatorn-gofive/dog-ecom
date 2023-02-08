import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/shop/home/home.component';
import { AboutComponent } from './pages/shop/about/about.component';
const routes: Routes = [
  { path: '',   redirectTo: 'shop', pathMatch: 'full' },
  {
  path:'shop',component:ShopComponent,children:[{path:"",component:HomeComponent},{path:"about",component:AboutComponent}]
},{path:'checkout',component:CheckoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

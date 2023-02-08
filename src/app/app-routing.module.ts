import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
const routes: Routes = [
  { path: '',   redirectTo: 'shop', pathMatch: 'full' },
  {
  path:'shop',component:ShopComponent
},{path:'checkout',component:CheckoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

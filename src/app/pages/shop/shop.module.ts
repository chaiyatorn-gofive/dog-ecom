import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/header/sidebar/sidebar.component';
import { CartSidebarComponent } from '../../components/header/cart-sidebar/cart-sidebar.component';
import { RouterModule } from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ShopComponent,HeaderComponent,SidebarComponent,CartSidebarComponent]
})
export class ShopModule { }

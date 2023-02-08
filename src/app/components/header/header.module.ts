import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [HeaderComponent,SidebarComponent,CartSidebarComponent]
})
export class HeaderModule { }

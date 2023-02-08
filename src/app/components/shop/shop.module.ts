import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from '../header/header.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShopComponent,HeaderComponent]
})
export class ShopModule { }

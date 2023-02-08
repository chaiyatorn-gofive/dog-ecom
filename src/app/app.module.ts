import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogHumanAgePipe } from './shared/pipe/dog-human-age.pipe';
import { ShopModule } from './components/shop/shop.module';
@NgModule({
  declarations: [AppComponent, DogHumanAgePipe],
  imports: [BrowserModule, AppRoutingModule,ShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

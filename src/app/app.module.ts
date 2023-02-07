import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogHumanAgePipe } from './pipe/dog-human-age.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, DogHumanAgePipe, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

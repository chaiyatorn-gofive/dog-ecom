import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuOpen:boolean = false
  public cartMenuOpen:boolean = false
  constructor(){

  }

  onMenuClick(){
    if(this.cartMenuOpen){
      this.cartMenuOpen = false
    }
    this.menuOpen = !this.menuOpen
  }
  onCartIconClick(){
    if(this.menuOpen){
      this.menuOpen = false
    }
    this.cartMenuOpen = !this.cartMenuOpen
  }
}

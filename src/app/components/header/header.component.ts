import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuOpen:boolean = false
  constructor(){

  }

  onMenuClick(){
    this.menuOpen = !this.menuOpen
  }
}
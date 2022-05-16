import { Component, OnInit,} from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logo = ("../../../assets/img/logowhite.png");

  constructor() { }

  menuVariable:boolean =false;

  menu_icon_variable:boolean=false;

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  ngOnInit(): void {
  }


}

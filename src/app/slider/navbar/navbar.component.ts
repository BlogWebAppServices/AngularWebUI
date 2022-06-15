import { Component, OnInit,} from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import { Client } from 'src/app/allservices-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categoryList$!: Observable<any[]>;
  public logo = ("../../../assets/img/logowhite.png");

  constructor(
    private service: Client 
  ) { }

  menuVariable:boolean =false;

  menu_icon_variable:boolean=false;

  onload() {
    this.categoryList$ = this.service.getCategoryList();
  }

  openMenu(){
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  ngOnInit(): void {
    this.onload();
    this.visibleOtherCategories();
    this.categoryList$.subscribe(res=>console.log(res.length))
    }

  visibleOtherCategories(){    
    this.categoryList$.subscribe(res=>{
      if(res.length<8){
         document.getElementById("otherCategories")?.remove();
      }
    })
  }

}

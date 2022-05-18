import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminCategoryCreateComponent } from '../admin-category-create-dialog/admin-category-create.component';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  panelOpenState = false;
  IsEditable:boolean=true;
  ButtonName:string="Düzenle";
  IconName:string="fa-pen-to-square";
  headElements = ['position', 'name', 'weight', 'symbol'];
  elements: any = [
    {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {name: 'Helium', weight: 4.0026, symbol: 'He'},
    {name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {name: 'Boron', weight: 10.811, symbol: 'B'},
    {name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.IsEditable=!this.IsEditable;
    if(!this.IsEditable){
         
    this.IconName="fa-plus";
    this.ButtonName="Güncelle";
    }else{

 
      this.IconName="fa-pen-to-square";
      this.ButtonName="Düzenle";
    }

    //this.dialog.open(AdminCategoryCreateComponent,{width: '250px'});


  }

  cancelUpdate(){

    this.IsEditable=!this.IsEditable;
    this.IconName="fa-pen-to-square";
    this.ButtonName="Düzenle";
  }

}

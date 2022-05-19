import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminCategoryCreateComponent } from '../admin-category-create-dialog/admin-category-create.component';
import {AllservicesApiService} from '../../allservices-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  
  someInput: string="";
  panelOpenState = false;
  IsEditable:boolean=true;
  ButtonName:string="Düzenle";
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


  categoryList$!:Observable<any[]>;

  constructor(public dialog:MatDialog, private service:AllservicesApiService) { }

  ngOnInit(): void {
    this.categoryList$ = this.service.getCategoryList();
  }

  editCategory(){
    this.IsEditable=!this.IsEditable;
    if(!this.IsEditable){

    this.ButtonName="";
    }else{

 
      this.ButtonName="Düzenle";
    }
    

    //this.dialog.open(AdminCategoryCreateComponent,{width: '250px'});


  }

  cancelUpdate(){

    this.IsEditable=!this.IsEditable;
    this.ButtonName="Düzenle";
  }

  saveUpdate(){

    this.IsEditable=!this.IsEditable;
    this.ButtonName="Düzenle";
  }

  addCategoryButton(someInput:string){
    this.service.addCategory(someInput);
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdminArticleUpdateDialogComponent } from '../admin-article-update-dialog/admin-article-update-dialog.component';
import { AdminCreateArticleDialogComponent } from '../admin-create-article-dialog/admin-create-article-dialog.component';


@Component({
  selector: 'app-admin-user-articles',
  templateUrl: './admin-user-articles.component.html',
  styleUrls: ['./admin-user-articles.component.css']
})
export class AdminUserArticlesComponent implements OnInit {

  headElements = ['position', 'name', 'weight', 'symbol','positionDeleteId','positionUpdateId'];
  elements: any = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor(public dialog:MatDialog) {
    
   }

  ngOnInit(): void {

    
  }

addArticleDialog(){
  this.dialog.open(AdminCreateArticleDialogComponent,{
    width: '1000px',
    height: '900px',
    disableClose: true
  });

}


onDeleteDialog(Id:string){
  console.log(Id+"numaralı kayıt silindi.");
  if(confirm("Are you sure to delete "+Id)) {
    console.log("Implement delete functionality here");
  }

}


onUpdateDialog(Id:string){
  console.log(Id+" numaralı kayıt güncellendi.");
  this.dialog.open(AdminArticleUpdateDialogComponent,{
    width: '750px',
    height: '750px',
    disableClose: true,
    data: Id
   
  
  });
}



}


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminCategoryCreateComponent } from '../admin-category-create-dialog/admin-category-create.component';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.dialog.open(AdminCategoryCreateComponent,{width: '250px'});


  }

}

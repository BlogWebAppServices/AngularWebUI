import { Component, Input, OnInit, } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AdminCategoryCreateComponent } from '../admin-category-create-dialog/admin-category-create.component';
import { Client } from '../../allservices-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  someInput: string = "";
  panelOpenState = false;
  IsEditableForCategory: boolean = true;
  IsEditableForUser: boolean = true;
  categoryEditButton: string = "Düzenle";
  categoryDeleteButton: string = "Sil";
  categoryNewName:string="";
  categoryList$!: Observable<any[]>;
  userList$!: Observable<any[]>;
  // Map to display data associate with foreign keys
  inspectionTypesMap: Map<number, string> = new Map()

  constructor(
    public dialog: MatDialog, 
    private service: Client
    ) { }

  @Input() categoryclass:any;
  id: number = 0;
  categoryName: string = "";
  createDate: Date = new Date();
  updateDate: Date | undefined;
  createUserId!: number;
  updateUserId: number|undefined;
  isDeleted!: boolean;
  isActive!: boolean;
  



  ngOnInit(): void {
    this.onload();
    // this.id = this.categoryclass.id;
    // this.categoryName = this.categoryclass.categoryName;
    // this.createDate = this.categoryclass.createDate;
    // this.updateDate = this.categoryclass.updateDate;
    // this.createUserId = this.categoryclass.createUserIdd;
    // this.updateUserId = this.categoryclass.updateUserId;
    // this.isDeleted = this.categoryclass.isDeleted;
    // this.isActive = this.categoryclass.isActive;
 
  }

  onload() {
    this.categoryList$ = this.service.getCategoryList();
    this.userList$ = this.service.getUserList();
  }
  addCategoryClickEvent() {
    var categoryclass = {
      Id : 0,
      categoryName:this.someInput,
      createDate :new Date(),
      createUserId:1,
      isDeleted:false,
      isActive:true
    }
    this.service.addCategory(categoryclass).subscribe(res => {
      this.onload();
      this.someInput = "";
    });

  }

  editCategory(entity: any) {
    entity.IsEditableForCategory = !entity.IsEditableForCategory;
    this.categoryNewName = entity.categoryName;
  }


  deleteCategoryClickEvent(item: any) {
    if (confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      var categoryclass = {
        id:item.id,
        categoryName:item.categoryNewName,
        createDate :item.createDate,
        createUserId:item.createUserId,
        updateDate :item.updateDate,
        updateUserId:item.updateUserId,
        isDeleted:true,
        isActive:true
      }

      this.service.updateCategory(item.id,categoryclass).subscribe(res => {
        this.onload();
      })
    }
  }

  editUser() {
    this.IsEditableForUser = !this.IsEditableForUser;
  }
  addUser() {
    this.IsEditableForUser = !this.IsEditableForUser;
    if (!this.IsEditableForUser) {
    }

  }

  cancelUpdate(entity: any) {

    entity.IsEditableForUser = !entity.IsEditableForUser;
  }

  saveUpdate(entity: any) {
    entity.IsEditableForUser = !entity.IsEditableForUser;
  }

  saveUserUpdate(){}

  cancelUserUpdate() {

    this.IsEditableForUser = !this.IsEditableForUser;
  }

  saveUpdateCategoryClickEvent(category:any) {

    var categoryclass = {
      id:category.id,
      categoryName:this.categoryNewName,
      createDate :category.createDate,
      createUserId:category.createUserId,
      updateDate :new Date(),
      updateUserId:1,
      isDeleted:false,
      isActive:true
    }

    this.service.updateCategory(category.id,categoryclass).subscribe(res => {
      this.onload();
      this.someInput = "";
    });
  }

}

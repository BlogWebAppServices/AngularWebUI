import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminArticleUpdateDialogComponent } from '../admin-article-update-dialog/admin-article-update-dialog.component';
import { AdminCreateArticleDialogComponent } from '../admin-create-article-dialog/admin-create-article-dialog.component';
import { Client } from '../../allservices-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-user-articles',
  templateUrl: './admin-user-articles.component.html',
  styleUrls: ['./admin-user-articles.component.css']
})


export class AdminUserArticlesComponent implements OnInit {
  id: number=0;
  name: string="";
  surname: string="";
  fullName: string="";
  phone: string="";
  city: string="";
  email: string="";
  password: string="";
  birhtdate: Date | undefined;
  createdate: Date | undefined;
  updatedate: Date | undefined;
  isActive: boolean | undefined;
  isDeleted: boolean | undefined;
  permissionLevelId: number =0;
  permissionName: string = "";
  isSelected: boolean | undefined;

  userFullname: string = "";

  constructor(
    public dialog: MatDialog,
    private service: Client,
  ) { }



  ngOnInit(): void {
    this.onload();

  }
  
  onload() {
    this.service.getUserById(2).subscribe(result => {
      this.id= result.id;
      this.name= result.name;
      this.surname= result.surname;
      this.fullName = result.fullName;
      this.phone= result.phone;
      this.city= result.city;
      this.email= result.email;
      this.password= result.password;
      this.birhtdate= result.birhtdate;
      this.createdate= result.createdate;
      this.updatedate= result.updatedate;
      this.isActive= result.isActive;
      this.isDeleted= result.isDeleted;
      this.isSelected= result.isSelected;
      this.service.getPermissionById(result.permissionLevelId).subscribe(nameResult =>{
       this.permissionName = nameResult.name;
      });

    console.log(this.city)

    });

  }

  addArticleDialog() {
    this.dialog.open(AdminCreateArticleDialogComponent, {
      width: '1000px',
      height: '900px',
      disableClose: true
    });
  }

  onDeleteDialog(Id: string) {
    console.log(Id + "numaralı kayıt silindi.");
    if (confirm("Are you sure to delete " + Id)) {
      console.log("Implement delete functionality here");
    }
  }

  onUpdateDialog(Id: string) {
    console.log(Id + " numaralı kayıt güncellendi.");
    this.dialog.open(AdminArticleUpdateDialogComponent, {
      width: '750px',
      height: '750px',
      disableClose: true,
      data: Id
    });
  }

  getUsername(item: any) {
    this.userFullname = item.fullName;
  }

}


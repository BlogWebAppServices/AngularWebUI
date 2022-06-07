import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/allservices-api.service';

@Component({
  selector: 'app-admin-user-edit-dialog',
  templateUrl: './admin-user-edit-dialog.component.html',
  styleUrls: ['./admin-user-edit-dialog.component.css']
})
export class AdminUserEditDialogComponent implements OnInit {
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


  constructor(
    private service: Client,
  ) { }

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
    });
  }

  ngOnInit(): void {
    this.onload();
  }

  saveUserEdit(){
    
  }

}

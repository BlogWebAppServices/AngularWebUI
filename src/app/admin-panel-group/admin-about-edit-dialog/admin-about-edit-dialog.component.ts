import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/allservices-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-about-edit-dialog',
  templateUrl: './admin-about-edit-dialog.component.html',
  styleUrls: ['./admin-about-edit-dialog.component.css']
})
export class AdminAboutEditDialogComponent implements OnInit {
  public imageSettings:Data;

  public customEditorToolbar:object = {
      items: ['Undo', 'Redo','Italic', 'Bold', 'CreateTable', 'Image',"FontName", 'FontSize' ,'FontColor','CreateLink','BulletFormatList','NumberFormatList','FullScreen' ]
  }
  
  contactList$!: Observable<any[]>;
  aboutContent:string="";

  constructor(
    private service: Client,
    private dialogRef: MatDialogRef<AdminAboutEditDialogComponent>,
  ) { 
    this.imageSettings = {  
      saveFormat: "Base64"  
    }  
  }

  onload() {
    this.contactList$ = this.service.getContactList();
    console.log(this.contactList$ )
  }
  
  ngOnInit(): void {
    document.getElementById("js-licensing")?.remove();
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
        this.onCancel(); 
      }
    });

    this.onload();
  }
  
  saveEdit(item:any) {
    var contactlass = {
      id:item.id,
      phone:item.phone,
      email:item.email,
      adress:item.adress,
      createDate :item.createDate,
      createUserId:item.createUserId,
      updateDate :new Date(),
      updateUserId:1,
      instagramLink:item.instagramLink,
      facebookLink:item.facebookLink, 
      linedinLink:item.linedinLink,
      twitterLlink:item.twitterLlink,
      about:this.aboutContent,
    }

    this.service.updateContact(item.id,contactlass).subscribe(res => {
      this.onload();
      this.aboutContent = "";
    });
  }


  
  onCancel(): void {
    this.dialogRef.close();
  }
}

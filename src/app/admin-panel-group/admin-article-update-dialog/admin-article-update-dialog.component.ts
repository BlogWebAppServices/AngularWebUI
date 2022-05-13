import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminUserArticlesComponent } from '../admin-user-articles/admin-user-articles.component';

@Component({
  selector: 'app-admin-article-update-dialog',
  templateUrl: './admin-article-update-dialog.component.html',
  styleUrls: ['./admin-article-update-dialog.component.css']
})
export class AdminArticleUpdateDialogComponent implements OnInit {

  public articleId = 0;


  constructor(
    private _dialogRef:MatDialogRef<AdminArticleUpdateDialogComponent>,
    injector: Injector,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    

  }

  ngOnInit(): void {

    this._dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
        this.onCancelDialog();
      }
    });

    this.articleId = this.data;
  }
  onCancelDialog() {
    this._dialogRef.close();
  }

  close(){
    this._dialogRef.close();
  }

  makaleGuncelle(category:string,header:string,articleDetail:string){
    console.log("Güncelle butona basıldı");
  }

}

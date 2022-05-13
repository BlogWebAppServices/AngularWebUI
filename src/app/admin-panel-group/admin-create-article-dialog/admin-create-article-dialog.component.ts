import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-create-article-dialog',
  templateUrl: './admin-create-article-dialog.component.html',
  styleUrls: ['./admin-create-article-dialog.component.css']
})
export class AdminCreateArticleDialogComponent implements OnInit {



  constructor(
    private dialogRef: MatDialogRef<AdminCreateArticleDialogComponent>,
  ) { }

  ngOnInit(): void {

    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === "Escape") {
        this.onCancel();
      }
    });

  }

  makaleKaydet(category: string, header: string, articleDetail: string) {
    console.log(header);
    console.log(category);
    console.log(articleDetail);

  }

  onCancel(): void {

    this.dialogRef.close();
  }

}

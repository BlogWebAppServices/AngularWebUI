import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-article-dialog',
  templateUrl: './admin-create-article-dialog.component.html',
  styleUrls: ['./admin-create-article-dialog.component.css']
})
export class AdminCreateArticleDialogComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }

  makaleKaydet(category:string ,header:string,articleDetail :string){
    console.log(header);
    console.log(category);
    console.log(articleDetail);
  
  }

}

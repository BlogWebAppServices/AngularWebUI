import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Client } from 'src/app/allservices-api.service';
@Component({
  selector: 'app-admin-create-article-dialog',
  templateUrl: './admin-create-article-dialog.component.html',
  styleUrls: ['./admin-create-article-dialog.component.css'],
  
}

)
export class AdminCreateArticleDialogComponent implements OnInit {
  public imageSettings:Data;

  public customEditorToolbar:object = {
      items: ['Undo', 'Redo','Italic', 'Bold', 'CreateTable', 'Image',"FontName", 'FontSize' ,'FontColor','CreateLink','BulletFormatList','NumberFormatList','FullScreen' ]
  }
  
  //Create Article Veriables
articleTitle:string="";
articleContent:string="";
articleMetaDescription:string="";
articleMetaTitle:string="";
artcileCategoryId:number=0;

textAreaData="";
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );  
}
  constructor(
    private service: Client,
    private dialogRef: MatDialogRef<AdminCreateArticleDialogComponent>,
  ) {

    this.imageSettings = {  
      saveFormat: "Base64"  
    }  

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
  onload() {
    
  }

  makaleKaydet() {
    var articleclass = {
    id: 0,
    title: this.articleTitle,
    content: this.articleContent,
    metaDescription: this.articleMetaDescription,
    metaTitle: this.articleMetaTitle,
    categoryId: this.artcileCategoryId,
    createTime: new Date(),
    createUser: 1,
    isDeleted: false,
    isActive: true,
    }
      console.log(articleclass)
      this.service.addArticle(articleclass).subscribe(res => {
     this.onCancel();
     });
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
};
  

  onCancel(): void {

    this.dialogRef.close();
  }

}

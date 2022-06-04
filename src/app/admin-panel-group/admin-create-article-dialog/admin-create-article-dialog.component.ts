import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-create-article-dialog',
  templateUrl: './admin-create-article-dialog.component.html',
  styleUrls: ['./admin-create-article-dialog.component.css'],
  
}

)
export class AdminCreateArticleDialogComponent implements OnInit {
  textAreaData="";
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}

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

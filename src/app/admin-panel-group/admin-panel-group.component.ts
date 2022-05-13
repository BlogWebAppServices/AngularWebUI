import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-admin-panel-group',
  templateUrl: './admin-panel-group.component.html',
  styleUrls: ['./admin-panel-group.component.css']
})
export class AdminPanelGroupComponent implements OnInit {
  public Editor = DecoupledEditor;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
}

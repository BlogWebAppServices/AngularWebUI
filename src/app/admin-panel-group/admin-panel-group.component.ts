import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin-panel-group',
  templateUrl: './admin-panel-group.component.html',
  styleUrls: ['./admin-panel-group.component.css']
})
export class AdminPanelGroupComponent implements OnInit {
  
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

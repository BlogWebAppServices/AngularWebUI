import { Client } from '../allservices-api.service';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelGroupRoutingModule } from './admin-panel-group-routing.module';
import { AdminPanelGroupComponent } from './admin-panel-group.component';

import { AdminUserListComponent } from '../admin-panel-group/admin-user-list/admin-user-list.component';
import { AdminArticleConfirmationListComponent } from '../admin-panel-group/admin-article-confirmation-list/admin-article-confirmation-list.component';
import { AdminCategoryListComponent } from '../admin-panel-group/admin-category-list/admin-category-list.component';
import { AdminUserArticlesComponent } from '../admin-panel-group/admin-user-articles/admin-user-articles.component';
import { AdminCreateArticleDialogComponent } from './admin-create-article-dialog/admin-create-article-dialog.component';
import { AdminUserArticleListDialogComponent } from './admin-user-article-list-dialog/admin-user-article-list-dialog.component';
import { AdminArticleUpdateDialogComponent } from './admin-article-update-dialog/admin-article-update-dialog.component';
import { AdminAllArticlesComponent } from './admin-all-articles/admin-all-articles.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MyCkEditorComponent } from './my-ck-editor/my-ck-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





@NgModule({
  declarations: [
    AdminPanelGroupComponent,
    AdminPanelGroupComponent,
    AdminUserListComponent,
    AdminArticleConfirmationListComponent,
    AdminCategoryListComponent,
    AdminUserArticlesComponent,
    AdminCreateArticleDialogComponent,
    AdminUserArticleListDialogComponent,
    AdminArticleUpdateDialogComponent,
    MyCkEditorComponent,
    AdminAllArticlesComponent

  ],
  imports: [
    CommonModule,
    AdminPanelGroupRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    HttpClientModule,
    AngularEditorModule, 
    FormsModule,
    ReactiveFormsModule, 
    CKEditorModule
  ],
  providers: [
    Client,
  ],
  schemas:[NO_ERRORS_SCHEMA]
  
})
export class AdminPanelGroupModule { }

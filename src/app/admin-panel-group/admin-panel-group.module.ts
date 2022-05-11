import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelGroupRoutingModule } from './admin-panel-group-routing.module';
import { AdminPanelGroupComponent } from './admin-panel-group.component';

import { AdminCreateUserComponent } from '../admin-panel-group/admin-create-user-dialog/admin-create-user.component';
import { AdminUserListComponent } from '../admin-panel-group/admin-user-list/admin-user-list.component';
import { AdminArticleConfirmationListComponent } from '../admin-panel-group/admin-article-confirmation-list/admin-article-confirmation-list.component';
import { AdminCategoryListComponent } from '../admin-panel-group/admin-category-list/admin-category-list.component';
import { AdminCategoryCreateComponent } from '../admin-panel-group/admin-category-create-dialog/admin-category-create.component';
import { AdminUserDetailComponent } from '../admin-panel-group/admin-user-detail/admin-user-detail.component';
import { AdminUserArticlesComponent } from '../admin-panel-group/admin-user-articles/admin-user-articles.component';
import { AdminCreateArticleDialogComponent } from './admin-create-article-dialog/admin-create-article-dialog.component';
import { AdminUserArticleListDialogComponent } from './admin-user-article-list-dialog/admin-user-article-list-dialog.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AdminPanelGroupComponent,
    AdminPanelGroupComponent,
    AdminCreateUserComponent,
    AdminUserListComponent,
    AdminArticleConfirmationListComponent,
    AdminCategoryListComponent,
    AdminCategoryCreateComponent,
    AdminUserDetailComponent,
    AdminUserArticlesComponent,
    AdminCreateArticleDialogComponent,
    AdminUserArticleListDialogComponent

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
    MatInputModule
  ]
})
export class AdminPanelGroupModule { }

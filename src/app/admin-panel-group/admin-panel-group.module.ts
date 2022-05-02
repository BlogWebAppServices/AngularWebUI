import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelGroupRoutingModule } from './admin-panel-group-routing.module';
import { AdminPanelGroupComponent } from './admin-panel-group.component';

import { AdminCreateUserComponent } from '../admin-panel-group/admin-create-user-dialog/admin-create-user.component';
import { AdminUserListComponent } from '../admin-panel-group/admin-user-list/admin-user-list.component';
import { AdminArticleConfirmationListComponent } from '../admin-panel-group/admin-article-confirmation-list/admin-article-confirmation-list.component';
import { AdminNavbarComponent } from '../admin-panel-group/admin-navbar/admin-navbar.component';
import { AdminCategoryListComponent } from '../admin-panel-group/admin-category-list/admin-category-list.component';
import { AdminCategoryCreateComponent } from '../admin-panel-group/admin-category-create-dialog/admin-category-create.component';
import { AdminUserDetailComponent } from '../admin-panel-group/admin-user-detail/admin-user-detail.component';
import { AdminUserArticlesComponent } from '../admin-panel-group/admin-user-articles/admin-user-articles.component';


@NgModule({
  declarations: [
    AdminPanelGroupComponent,
    AdminPanelGroupComponent,
    AdminCreateUserComponent,
    AdminUserListComponent,
    AdminArticleConfirmationListComponent,
    AdminNavbarComponent,
    AdminCategoryListComponent,
    AdminCategoryCreateComponent,
    AdminUserDetailComponent,
    AdminUserArticlesComponent

  ],
  imports: [
    CommonModule,
    AdminPanelGroupRoutingModule
  ]
})
export class AdminPanelGroupModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleConfirmationListComponent } from './admin-article-confirmation-list/admin-article-confirmation-list.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminPanelGroupComponent } from './admin-panel-group.component';
import { AdminUserArticlesComponent } from './admin-user-articles/admin-user-articles.component';
import { AdminUserDetailComponent } from './admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/user-articles', pathMatch: 'full' },
  {
    path: '', component: AdminPanelGroupComponent, children: [
      { path: 'user-list', component: AdminUserListComponent },
      { path: 'categori-list', component: AdminCategoryListComponent },
      { path: 'user-detail', component: AdminUserDetailComponent },
      { path: 'user-articles', component: AdminUserArticlesComponent },
      { path: 'article-confirmation-list', component: AdminArticleConfirmationListComponent },
      { path: 'user-detail', component: AdminUserDetailComponent },

      { path: 'article-confirmation-list', component: AdminArticleConfirmationListComponent },



    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelGroupRoutingModule { }

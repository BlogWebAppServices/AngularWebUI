import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleConfirmationListComponent } from './admin-article-confirmation-list/admin-article-confirmation-list.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminPanelGroupComponent } from './admin-panel-group.component';
import { AdminUserArticlesComponent } from './admin-user-articles/admin-user-articles.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminAllArticlesComponent } from './admin-all-articles/admin-all-articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/user-articles', pathMatch: 'full' },
  {
    path: '', component: AdminPanelGroupComponent, children: [
      { path: 'user-list', component: AdminUserListComponent },
      { path: 'categori-list', component: AdminCategoryListComponent },
      { path: 'user-articles', component: AdminUserArticlesComponent },
      { path: 'article-confirmation-list', component: AdminArticleConfirmationListComponent },
      { path: 'article-confirmation-list', component: AdminArticleConfirmationListComponent },
      { path: 'all-articles', component: AdminAllArticlesComponent },
      




    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelGroupRoutingModule { }

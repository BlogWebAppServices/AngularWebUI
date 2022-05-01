import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home/home.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
// import { ArticleDetailComponent } from './home/article-detail/article-detail.component';
// import { CategoriComponent } from './categori/categori.component';
// import { AuthorProfileComponent } from './author-profile/author-profile.component'

// //Admin Paneli
// import { AdminCategoryListComponent } from './admin-panel-group/admin-category-list/admin-category-list.component';
// import { AdminUserDetailComponent } from './admin-panel-group/admin-user-detail/admin-user-detail.component';
// import { AdminUserListComponent } from './admin-panel-group/admin-user-list/admin-user-list.component';
// import { AdminUserArticlesComponent } from './admin-panel-group/admin-user-articles/admin-user-articles.component';



const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'article-detail', component: ArticleDetailComponent },
  // { path: 'category', component: CategoriComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'authorprofile', component: AuthorProfileComponent },

  // // Admin Formu
  // { path: 'admin/user-list', component: AdminUserListComponent },
  // { path: 'admin/categori-list', component: AdminCategoryListComponent },
  // { path: 'admin/user-detail', component: AdminUserDetailComponent },
  // { path: 'admin/user-articles', component: AdminUserArticlesComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
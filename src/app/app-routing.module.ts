import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ArticleDetailComponent } from './home/article-detail/article-detail.component';
import { CategoriComponent } from './categori/categori.component';
import {AuthorProfileComponent} from './author-profile/author-profile.component'
import { LoginscreenComponent } from './admin/loginscreen/loginscreen.component';
import { CategoriListComponent } from './admin/categori-list/categori-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ArticleListComponent } from './admin/article-list/article-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article-detail', component: ArticleDetailComponent },
  { path: 'category', component: CategoriComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'authorprofile', component: AuthorProfileComponent },
  { path: 'admin/loginscreen', component: LoginscreenComponent },
  { path: 'admin/categori-list', component: CategoriListComponent },
  { path: 'admin/user-list', component: UserListComponent },
  { path: 'admin/article-list', component: ArticleListComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
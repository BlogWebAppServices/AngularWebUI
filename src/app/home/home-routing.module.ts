import { NgModule } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ArticleDetailComponent } from '../home/article-detail/article-detail.component';
import { CategoriComponent } from '../categori/categori.component';
import { AuthorProfileComponent } from '../author-profile/author-profile.component'
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  //{ path: '**', redirectTo: '/home/article' },
  {
    
    path: '', component: HomeComponent, children: [

      { path: 'article', component: ArticleComponent },
      { path: 'about', component: AboutComponent },
      { path: 'article-detail', component: ArticleDetailComponent },
      { path: 'category', component: CategoriComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'authorprofile', component: AuthorProfileComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

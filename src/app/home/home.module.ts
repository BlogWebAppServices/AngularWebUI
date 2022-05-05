import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { AuthorProfileComponent } from '../author-profile/author-profile.component';
import { ContactComponent } from '../contact/contact.component';
import { ArticleComponent } from '../home/article/article.component';
import { ArticleDetailComponent } from '../home/article-detail/article-detail.component';
import { CarouselComponent } from '../slider/carousel/carousel.component';
import { FooterComponent } from '../slider/footer/footer.component';
import { HeaderComponent } from '../slider/header/header.component';
import { NavbarComponent } from '../slider/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CategoriComponent } from '../categori/categori.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecentPostsComponent } from '../slider/recent-posts/recent-posts.component';
import { PopularArticleComponent } from '../slider/popular-article/popular-article.component';
import { RightCategoriesComponent } from '../slider/right-categories/right-categories.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AuthorProfileComponent,
    ContactComponent,
    ArticleComponent,
    ArticleDetailComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CategoriComponent,
    RecentPostsComponent,
    PopularArticleComponent,
    RightCategoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class HomeModule { }

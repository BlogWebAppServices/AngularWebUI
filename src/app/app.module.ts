import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './home/article/article.component';
import { ArticleDetailComponent } from './home/article-detail/article-detail.component';
import { CarouselComponent } from './slider/carousel/carousel.component';
import { FooterComponent } from './slider/footer/footer.component';
import { HeaderComponent } from './slider/header/header.component';
import { NavbarComponent } from './slider/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home/home.component';
import{MatCardModule} from '@angular/material/card';
import { CategoriComponent } from './categori/categori.component';
import { CreateUserDialogComponent } from './admin/create-user-dialog/create-user-dialog.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { CreateArticleDialogComponent } from './admin/create-article-dialog/create-article-dialog.component';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { CategoriListComponent } from './admin/categori-list/categori-list.component';
import { CreateCategoriDialogComponent } from './admin/create-categori-dialog/create-categori-dialog.component';
import { LoginscreenComponent } from './admin/loginscreen/loginscreen.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    AuthorProfileComponent,
    ContactComponent,
    ArticleComponent,
    ArticleDetailComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    CategoriComponent,
    CreateUserDialogComponent,
    UserListComponent,
    CreateArticleDialogComponent,
    ArticleListComponent,
    CategoriListComponent,
    CreateCategoriDialogComponent,
    LoginscreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component';
// import { AuthorProfileComponent } from './author-profile/author-profile.component';
// import { ContactComponent } from './contact/contact.component';
// import { ArticleComponent } from './home/article/article.component';
// import { ArticleDetailComponent } from './home/article-detail/article-detail.component';
// import { CarouselComponent } from './slider/carousel/carousel.component';
// import { FooterComponent } from './slider/footer/footer.component';
// import { HeaderComponent } from './slider/header/header.component';
// import { NavbarComponent } from './slider/navbar/navbar.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatButtonModule } from '@angular/material/button';
 import { MatMenuModule } from '@angular/material/menu';
// import { HomeComponent } from './home/home/home.component';
 import { MatCardModule } from '@angular/material/card';
// import { CategoriComponent } from './categori/categori.component';
 import { MatFormFieldModule } from '@angular/material/form-field';
// import { RecentPostsComponent } from './slider/recent-posts/recent-posts.component';
// import { PopularArticleComponent } from './slider/popular-article/popular-article.component';
// import { RightCategoriesComponent } from './slider/right-categories/right-categories.component';

// Admin Panel Sayfa Formları
// import { AdminPanelGroupComponent } from './admin-panel-group/admin-panel-group.component';
// import { AdminCreateUserComponent } from './admin-panel-group/admin-create-user-dialog/admin-create-user.component';
// import { AdminUserListComponent } from './admin-panel-group/admin-user-list/admin-user-list.component';
// import { AdminArticleConfirmationListComponent } from './admin-panel-group/admin-article-confirmation-list/admin-article-confirmation-list.component';
// import { AdminNavbarComponent } from './admin-panel-group/admin-navbar/admin-navbar.component';
// import { AdminCategoryListComponent } from './admin-panel-group/admin-category-list/admin-category-list.component';
// import { AdminCategoryCreateComponent } from './admin-panel-group/admin-category-create-dialog/admin-category-create.component';
// import { AdminUserDetailComponent } from './admin-panel-group/admin-user-detail/admin-user-detail.component';
// import { AdminUserArticlesComponent } from './admin-panel-group/admin-user-articles/admin-user-articles.component';



@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // AuthorProfileComponent,
    // ContactComponent,
    // ArticleComponent,
    // ArticleDetailComponent,
    // CarouselComponent,
    // FooterComponent,
    // HeaderComponent,
    // NavbarComponent,
    // HomeComponent,
    // CategoriComponent,
    // RecentPostsComponent,
    // PopularArticleComponent,
    // RightCategoriesComponent,
    // AdminPanelGroupComponent,
    // AdminCreateUserComponent,
    // AdminUserListComponent,
    // AdminArticleConfirmationListComponent,
    // AdminNavbarComponent,
    // AdminCategoryListComponent,
    // AdminCategoryCreateComponent,
    // AdminUserDetailComponent,
    // AdminUserArticlesComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

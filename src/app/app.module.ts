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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Pipe } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Client } from 'src/app/allservices-api.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})


export class ArticleComponent implements OnInit {
  categoryList$!: Observable<any[]>;
  articleList$!: Observable<any[]>;
  constructor(
    public sanitizer:DomSanitizer,
    private service: Client,
  ) { }
  
 

  ngOnInit(): void {
    this.onload();
  }
  onload() {
    this.categoryList$ = this.service.getCategoryList();
    this.articleList$ = this.service.getArticleList();
    this.sanitizer;
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/allservices-api.service';

@Component({
  selector: 'app-right-categories',
  templateUrl: './right-categories.component.html',
  styleUrls: ['./right-categories.component.css']
})
export class RightCategoriesComponent implements OnInit {
  categoryList$!: Observable<any[]>;
  constructor(
    private service: Client,
  ) { }

  ngOnInit(): void {
    this.onload();
  }
  onload(){
    this.categoryList$ = this.service.getCategoryList();
  }

}

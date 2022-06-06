import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-all-articles',
  templateUrl: './admin-all-articles.component.html',
  styleUrls: ['./admin-all-articles.component.css']
})
export class AdminAllArticlesComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}

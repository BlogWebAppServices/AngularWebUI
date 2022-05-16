import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public logo = ("../../../assets/img/logoblack.png");
  constructor() { }

  ngOnInit(): void { 
  }

}

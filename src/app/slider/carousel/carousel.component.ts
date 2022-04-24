import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1920/1080`);

  constructor() { }

  ngOnInit(): void {
  }

}


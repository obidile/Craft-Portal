import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  images = [
    {
      src: '../assets/img/chair.jpg',
      title: 'First Slide',
      description: 'This is the first slide'
    },
    {
      src: '../assets/img/chair.jpg',
      title: 'Second Slide',
      description: 'This is the second slide'
    },
    {
      src: '../assets/img/chair.jpg',
      title: 'Third Slide',
      description: 'This is the third slide'
    }
  ];
}

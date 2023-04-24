import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/our-services.model';
@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {

  sneakers: Sneaker[] =[
    {
      Title: "Dark Color Sneaker",
      Price: "R120.00",
      Image: "dark_black_sneaker.jpg",
      IsSelected: true
    },
    {
      Title: "Mixed Colors Sneaker",
      Price: "R130.00",
      Image: "mixed_sneaker.jpg",
      IsSelected: true
    },
    {
      Title: "Red White and Black Colors Sneaker",
      Price: "R140.00",
      Image: "red_white_black_sneaker.jpg",
      IsSelected: false
    },
    {
      Title: "White Sneaker",
      Price: "R150.00",
      Image: "white_sneaker.webp",
      IsSelected: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {

  }
}

import { Component, OnInit } from '@angular/core';
import { HomeCleaning } from 'src/app/models/our-services.model';

@Component({
  selector: 'app-home-cleaning',
  templateUrl: './home-cleaning.component.html',
  styleUrls: ['./home-cleaning.component.css']
})
export class HomeCleaningComponent implements OnInit {

  homeCleaningServices: HomeCleaning[] = [
    {
      Title: "Bath Room",
      Price: "R70.00",
      Image: "bathroom.png",
      IsSelected: true
    },
    {
      Title: "Windows",
      Price: "R80.00",
      Image: "windows.jpg",
      IsSelected: true
    },
    {
      Title: "Laundry Per kg",
      Price: "R75.00",
      Image: "Laundry.jpg",
      IsSelected: true
    },
    {
      Title: "Full House",
      Price: "R400.00",
      Image: "full_house.jpg",
      IsSelected: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {

  }
}

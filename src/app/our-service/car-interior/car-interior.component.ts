import { Component, OnInit } from '@angular/core';
import { CarInterior } from 'src/app/models/our-services.model';

@Component({
  selector: 'app-car-interior',
  templateUrl: './car-interior.component.html',
  styleUrls: ['./car-interior.component.css']
})
export class CarInteriorComponent implements OnInit {

  carInterior: CarInterior[] = [
    {
      Title: "Cloth Seats",
      Price: "R300.00",
      Image: "cloth_seats.jpg",
      IsSelected: true
    },
    {
      Title: "Leather Seats",
      Price: "R320.00",
      Image: "leather_seats.jpg",
      IsSelected: true
    },
    {
      Title: "Dashboard",
      Price: "R50.00",
      Image: "dashboard.jpg",
      IsSelected: true
    },
    {
      Title: "Full Service",
      Price: "R400.00",
      Image: "full_service.jpg",
      IsSelected: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {

  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent implements OnInit {

  houseServices: any[] = [
      {
        id: 1,
        title: 'Batchelor Tiles',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for House',
        price: "R450.00"
      },
      {
        id: 2,
        title: 'Batchelor Fitted Carpet',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R500.00"
      },
      {
        id: 3,
        title: '1 Bedroom',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for office',
        price: "R600.00"
      },
      {
        id: 4,
        title: '1 Bedroom Fitted Carpet',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R750.00"
      },
      {
        id: 5,
        title: '2 Bedroom Tiles',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R750.00"
      },
      {
        id: 6,
        title: '2 Bedroom Fitted Carpet',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R850.00"
      },
      {
        id: 7,
        title: '2 Bed 2 Bath Tiles',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R1000.00"
      },
      {
        id: 8,
        title: '2 Bed 2 Bath Fitted Carpet',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R1500.00"
      },
      {
        id: 19,
        title: '3 Bed Tiles',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R950.00"
      },
      {
        id: 10,
        title: '3 Bed Fitted Carpet',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R1700.00"
      },
      {
        id: 11,
        title: '3 Bed 2 Bath Tiles',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R1300.00"
      },
      {
        id: 12,
        title: '3 Bed 2 Bath Fitted Carpet',
        image: '/assets/services/house/fitted.jpg',
        description: 'Deep cleaning for house',
        price: "R1900.00"
      },
    ]

    constructor() { }

    ngOnInit(): void {
  
    }
  
    addToWishlist(id: number) {
      console.log('Service added to wishlist with ID:', id);
    }
  
    addToBooking(id: number) {
      console.log('Service added to booking with ID:', id);
    }
}

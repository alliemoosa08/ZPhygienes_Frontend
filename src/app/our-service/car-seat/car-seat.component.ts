import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-car-seat',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './car-seat.component.html',
  styleUrl: './car-seat.component.css'
})
export class CarSeatComponent implements OnInit {

  carSeatServices: any[] = [
      {
        id: 1,
        title: 'Convertible',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
      {
        id: 1,
        title: 'Coupe',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
      {
        id: 1,
        title: 'Hatchback',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
      {
        id: 1,
        title: 'Sedan',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
      {
        id: 1,
        title: 'SUV',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
      {
        id: 1,
        title: 'Single Cab',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
      {
        id: 1,
        title: 'Double Cab',
        image: '/assets/services/car_seat/fitted.jpg',
        description: 'Deep cleaning for car seats',
        price: "R500.00"
      },
    ]

    ngOnInit(): void {
  
    }

    addToWishlist(id: number) {
      console.log('Service added to wishlist with ID:', id);
    }
  
    addToBooking(id: number) {
      console.log('Service added to booking with ID:', id);
    }
}

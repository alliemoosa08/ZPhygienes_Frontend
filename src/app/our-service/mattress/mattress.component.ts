import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mattress',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './mattress.component.html',
  styleUrl: './mattress.component.css'
})
export class MattressComponent implements OnInit {

mattressServices: any[] = [
    {
      id: 1,
      title: 'Single',
      image: '/assets/services/mattress/single.jpg',
      description: 'Deep cleaning for mattress',
      price: "R300.00"
    },
    {
      id: 2,
      title: 'Double',
      image: '/assets/services/mattress/double.jpg',
      description: 'Deep cleaning for mattress',
      price: "R450.00"
    },
    {
      id: 3,
      title: 'Queen',
      image: '/assets/services/mattress/queen.jpg',
      description: 'Deep cleaning for mattress',
      price: "R500.00"
    },
    {
      id: 4,
      title: 'King',
      image: '/assets/services/mattress/king.jpg',
      description: 'Deep cleaning for mattress',
      price: "R650.00"
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

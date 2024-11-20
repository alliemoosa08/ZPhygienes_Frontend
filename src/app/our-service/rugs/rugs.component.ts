import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-rugs',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './rugs.component.html',
  styleUrl: './rugs.component.css'
})
export class RugsComponent implements OnInit {

  rugServices: any[] = [
    {
      id: 1,
      title: 'Small (160 * 230)',
      image: '/assets/services/rug/small_rug.jpg',
      description: 'Deep cleaning for rug',
      price: "R250.00"
    },
    {
      id: 2,
      title: 'Medium (200 * 300)',
      image: '/assets/services/rug/medium_rug.jpg',
      description: 'Deep cleaning for rug',
      price: "R300.00"
    },
    {
      id: 3,
      title: 'Large (250 * 350)',
      image: '/assets/services/rug/large_rug.jpg',
      description: 'Deep cleaning for rug',
      price: "R350.00"
    },
    {
      id: 4,
      title: '1 Bed Fitted Carpet',
      image: '/assets/services/rug/fitted.jpg',
      description: 'Deep cleaning for carpet',
      price: "R500.00"
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

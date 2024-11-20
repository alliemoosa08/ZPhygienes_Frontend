import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chair',
  standalone: true,
  imports: [ 
    MatCardModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './chair.component.html',
  styleUrl: './chair.component.css'
})
export class ChairComponent implements OnInit {

  chairServices: any[] = [
    {
      id: 1,
      title: 'Office Chair',
      image: '/assets/services/chair/office_chair.jpg',
      description: 'Deep cleaning for Office chair',
      price: "R100.00"
    },
    {
      id: 2,
      title: 'Occasional Chair',
      image: '/assets/services/chair/occasional_chair.jpg',
      description: 'Deep cleaning for Occasional Chair',
      price: "R200.00"
    },
    {
      id: 3,
      title: 'Bar Stool',
      image: '/assets/services/chair/bar_stool.jpg',
      description: 'Deep cleaning for Bar Stool',
      price: "R100.00"
    },
    {
      id: 4,
      title: 'Patio Chair',
      image: '/assets/services/chair/patio_chair.jpg',
      description: 'Deep cleaning for Patio Chair',
      price: "R150.00"
    },
    {  
      id: 5,
      title: 'Ottoman',
      image: '/assets/services/chair/ottoman.jpg',
      description: 'Deep cleaning for Ottoman',
      price: "R100.00"
    },
  ]

  constructor(private router: Router) { }

    ngOnInit(): void {
    }

    addToWishlist(id: number) {
      console.log('Service added to wishlist with ID:', id);
    }
  
    addToBooking(id: number) {
      console.log('Service added to booking with ID:', id);
    }
}

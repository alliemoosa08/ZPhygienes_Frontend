import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent implements OnInit {

  officeServices: any[] = [
      {
        id: 1,
        title: 'Fitted Carpet',
        image: '/assets/services/office/fitted.jpg',
        description: 'Deep cleaning for office',
        price: "R17.00 (pms)"
      },
      {
        id: 2,
        title: 'Tiles',
        image: '/assets/services/office/tiles.jpg',
        description: 'Deep cleaning for office',
        price: "R15.00 (pms)"
      },
      {
        id: 3,
        title: 'Bathroom',
        image: '/assets/services/office/bathroom.jpg',
        description: 'Deep cleaning for office',
        price: "R100.00"
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

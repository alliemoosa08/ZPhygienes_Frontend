import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-couch',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './couch.component.html',
  styleUrl: './couch.component.css'
})
export class CouchComponent implements OnInit {


  couchServices: any[] = [
    {
      id: 1,
      title: '1 Seater',
      image: '/assets/services/couch/1-seater.jpg',
      description: 'Deep cleaning for 1 seater',
      price: "R200.00"
    },
    {
      id: 2,
      title: '2 Seater',
      image: '/assets/services/couch/2-seater.jpg',
      description: 'Deep cleaning for 1 seater',
      price: "R300.00"
    },
    {
      id: 3,
      title: '2 Seater L shape',
      image: '/assets/services/couch/2-L-seater.jpg',
      description: 'View list of couch service',
      price: "R350.00" 
    },
    {
      id: 4,
      title: '3 Seater',
      image: '/assets/services/couch/3-seater.jpg',
      description: 'View list of couch service',
      price: "R450.00"
    },
    {
      id: 5,
      title: '3 Seater L shape',
      image: '/assets/services/couch/3-L-seater.jpg',
      description: 'View list of couch service',
      price: "R500.00"
    },
    {
      id: 6,
      title: '4 Seater',
      image: '/assets/services/couch/4-seater.jpg',
      description: 'View list of couch service',
      price: "R550.00"
    },
    {
      id: 7,
      title: '4 Seater L shape',
      image: '/assets/services/couch/4-L-seater.jpg',
      description: 'View list of couch service',
      price: "R600.00"
    },
    {
      id: 8,
      title: '5 Seater',
      image: '/assets/services/couch/5-seater.jpg',
      description: 'View list of couch service',
      price: "R650.00"
    },
    {
      id: 9,
      title: '5 Seater L shape',
      image: '/assets/services/couch/5-L-seater.jpg',
      description: 'View list of couch service',
      price: "R700.00"
    },
    {
      id: 10,
      title: '6 Seater',
      image: '/assets/services/couch/6-seater.jpg',
      description: 'View list of couch service',
      price: "R750.00"
    },
    {
      id: 11,
      title: '6 Seater L shape',
      image: '/assets/services/couch/6-L-seater.jpg',
      description: 'View list of couch service',
      price: "R800.00"
    }
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

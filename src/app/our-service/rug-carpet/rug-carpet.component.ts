import { Component, OnInit } from '@angular/core';
import { RugsAndCarpets } from 'src/app/models/our-services.model';

@Component({
  selector: 'app-rug-carpet',
  templateUrl: './rug-carpet.component.html',
  styleUrls: ['./rug-carpet.component.css']
})
export class RugCarpetComponent implements OnInit {

  rugsAndCarpet: RugsAndCarpets[] = [
    {
      Title: "Large Rug (250cm x 350cm)",
      Price: "R350.00",
      Image: "large_rug.webp",
      IsSelected: true
    },
    {
      Title: "Medium Rug (200cm x 300cm)",
      Price: "R300.00",
      Image: "medium_rug.jpg",
      IsSelected: true
    },
    {
      Title: "Small Rug (160cm x 230cm)",
      Price: "R250.00",
      Image: "small_rug.jpg",
      IsSelected: true
    },
    {
      Title: "One Bedroom Carpet",
      Price: "R400.00",
      Image: "room_1_carpet.jpg",
      IsSelected: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {

  }
}

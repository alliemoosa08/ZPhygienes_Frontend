import { Component, OnInit } from '@angular/core';
import { OfficeCleaning } from 'src/app/models/our-services.model';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  officeServices: OfficeCleaning[] = [
    {
      Title: "Conferance Rooms",
      Price: "R550.00",
      Image: "conferance_rooms.png",
      IsSelected: true
    },
    {
      Title: "Desks",
      Price: "R250.00",
      Image: "desk.webp",
      IsSelected: true
    },
    {
      Title: "Floor",
      Price: "R150.00",
      Image: "floor.jpg",
      IsSelected: true
    },
    {
      Title: "Windows",
      Price: "R80.00",
      Image: "windows.jpg",
      IsSelected: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {

  }

}

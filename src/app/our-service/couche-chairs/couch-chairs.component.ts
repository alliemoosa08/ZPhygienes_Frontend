import { Component, OnInit } from '@angular/core';
import { CouchesAndChairs } from 'src/app/models/our-services.model';

@Component({
  selector: 'app-couch-chairs',
  templateUrl: './couch-chairs.component.html',
  styleUrls: ['./couch-chairs.component.css']
})
export class CouchChairsComponent implements OnInit {

  couchOrChairItems: CouchesAndChairs[] = [
    {
      Title: "5 Seater Couch",
      Price: "R550.00",
      Image: "couch_5_seater.jpg",
      IsSelected: true
    },
    {
      Title: "4 Seater Couch",
      Price: "R500.00",
      Image: "couch_4_seater.jpg",
      IsSelected: false
    },
    {
      Title: "3 Seater Couch",
      Price: "R450.00",
      Image: "couch_3_seater.jpg",
      IsSelected: true
    },
    {
      Title: "2 Seater Couch",
      Price: "R400.00",
      Image: "couch_2_seater.jpg",
      IsSelected: false
    },
    {
      Title: "Chair",
      Price: "R150.00",
      Image: "office_chair.jpg",
      IsSelected: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    
  }
}

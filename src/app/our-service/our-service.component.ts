import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToCoucheService(){
  console.log("couche service works")
  }
  goToRugService(){
    console.log("Rug service works")
  }
  goToSneakerService(){
    console.log("Sneaker service works")
  }
  goToCarIntService(){
    console.log("Car service works")
  }
  goToOfficeService(){
    console.log("Office service works")
  }
  goToHomeService(){
    console.log("Home service works")
  }
}

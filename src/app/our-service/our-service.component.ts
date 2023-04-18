import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCouchService(){
    this.router.navigate(["our-services/couches-chairs"])
  }
  goToRugService(){
    this.router.navigate(["our-services/rug-carpets"])
  }
  goToSneakerService(){
    this.router.navigate(["our-services/sneakers"])
  }
  goToCarIntService(){
    this.router.navigate(["our-services/car-interior"])
  }
  goToOfficeService(){
    this.router.navigate(["our-services/office"])
  }
  goToHomeService(){
    this.router.navigate(["our-services/home"])
  }
}

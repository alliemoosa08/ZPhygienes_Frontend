import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  services: any[] = [
    {
      title: 'Couch Cleaning',
      function: () => this.goToCouchService(),
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Chair Cleaning',
      function: () => this.goToChairService(),
      image: '/assets/services/chair/chair_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Rugs Cleaning',
      function: () => this.goToRugsService(),
      image: '/assets/services/rug/rug_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Mattress Cleaning',
      function: () => this.goToMattressService(),
      image: '/assets/services/mattress/mattress_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Office Cleaning',
      function: () => this.goToOfficeService(),
      image: '/assets/services/office/office_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'House Cleaning',
      function: () => this.goToHomeService(),
      image: '/assets/services/house/house_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Car Seat Cleaning',
      function: () => this.goToCarSeatService(),
      image: '/assets/services/car_seat/car_seat_service.jpg',
      description: 'View list of couch service'
    },
  ]

  serviceRouter: string = "our-services";

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goToCouchService(){
    this.router.navigate([this.serviceRouter+"/couch"])
  }
  goToChairService(){
    this.router.navigate([this.serviceRouter+"/chair"])
  }
  goToRugsService(){
    this.router.navigate([this.serviceRouter+"/rugs"])
  }
  goToMattressService(){
    this.router.navigate([this.serviceRouter+"/mattress"])
  }
  goToOfficeService(){
    this.router.navigate([this.serviceRouter+"/office"])
  }
  goToHomeService(){
    this.router.navigate([this.serviceRouter+"/house"])
  }
  goToCarSeatService(){
    this.router.navigate([this.serviceRouter+"/car-seat"])
  }
}

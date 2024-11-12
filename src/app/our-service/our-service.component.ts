import { Component, OnInit } from '@angular/core';

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
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Rugs Cleaning',
      function: () => this.goToRugsService(),
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Mattress Cleaning',
      function: () => this.goToMattressService(),
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Office Cleaning',
      function: () => this.goToOfficeService(),
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Home Cleaning',
      function: () => this.goToHomeService(),
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
    {
      title: 'Car Seat Cleaning',
      function: () => this.goToCarSeatService(),
      image: '/assets/services/couch/couch_service.jpg',
      description: 'View list of couch service'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goToCouchService(){
  console.log("couch service works")
  }
  goToChairService(){
    console.log("chair service works")
  }
  goToRugsService(){
    console.log("Rugs service works")
  }
  goToMattressService(){
    console.log("Mattress service works")
  }
  goToOfficeService(){
    console.log("Office service works")
  }
  goToHomeService(){
    console.log("Home service works")
  }
  goToCarSeatService(){
    console.log("Car Seat service works")
  }
}

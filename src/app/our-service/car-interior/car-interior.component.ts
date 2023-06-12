import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/services/our-services.service';

@Component({
  selector: 'app-car-interior',
  templateUrl: './car-interior.component.html',
  styleUrls: ['./car-interior.component.css']
})
export class CarInteriorComponent implements OnInit {

  items!: any

  constructor(private ourServices: OurServicesService) { }

  ngOnInit(): void {
    this.ourServices.geServiceByServiceType(4).subscribe({
      next: data => {
        this.items = data
        console.log(this.items);
      }, error: error => {
        console.log(error);
      }
    });
  }

  addItem() {

  }

}

import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/services/our-services.service';
@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {

 items!: any;

  constructor(private ourServices: OurServicesService) { }

  ngOnInit(): void {
    this.ourServices.geServiceByServiceType(3).subscribe({
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

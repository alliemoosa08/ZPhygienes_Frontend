import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/services/our-services.service';

@Component({
  selector: 'app-rug-carpet',
  templateUrl: './rug-carpet.component.html',
  styleUrls: ['./rug-carpet.component.css']
})
export class RugCarpetComponent implements OnInit {

 items! : any; 
 
  constructor(private ourServices: OurServicesService) { }

  ngOnInit(): void {
    this.ourServices.geServiceByServiceType(2).subscribe({
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

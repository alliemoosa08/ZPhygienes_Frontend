import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/services/our-services.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  items!: any;
  constructor(private ourServices: OurServicesService) { }

  ngOnInit(): void {
     // interval(3000).subscribe(() => {
      this.ourServices.geServiceByServiceType(5).subscribe({
        next: data => {
          this.items = data
          console.log(this.items);
        }, error: error => {
          console.log(error);
        }
      });
    // });
  }

  addItem() {

  }

}

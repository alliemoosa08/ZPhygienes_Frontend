import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/services/our-services.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-couch-chairs',
  templateUrl: './couch-chairs.component.html',
  styleUrls: ['./couch-chairs.component.css']
})
export class CouchChairsComponent implements OnInit {

  items! :any;

  constructor(private ourServices: OurServicesService) { }

  ngOnInit(): void {
    // interval(3000).subscribe(() => {
      this.ourServices.geServiceByServiceType(1).subscribe({
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

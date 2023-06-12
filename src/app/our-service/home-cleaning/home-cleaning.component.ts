import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/services/our-services.service';

@Component({
  selector: 'app-home-cleaning',
  templateUrl: './home-cleaning.component.html',
  styleUrls: ['./home-cleaning.component.css']
})
export class HomeCleaningComponent implements OnInit {

  items!: any;

  constructor(private ourServices: OurServicesService) { }

  ngOnInit(): void {
     // interval(3000).subscribe(() => {
      this.ourServices.geServiceByServiceType(6).subscribe({
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

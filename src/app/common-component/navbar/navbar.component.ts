import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  home() {
    this.router.navigate(["/home"])
  }

  ourServices() {
    this.router.navigate(["/our-services"])
  }
  aboutUs() {
    this.router.navigate(["/about-us"])
  }
  contactUs() {
    this.router.navigate(["/contact-us"])
  }

}

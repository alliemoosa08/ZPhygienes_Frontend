import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showToggler: boolean = false;


  constructor(
    private router: Router
  ) { 
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.showToggler = window.innerWidth < 426; // Show toggler on mobile screens
  }

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

  signIn() {
    this.router.navigate(["/sign-in"])
  }

}

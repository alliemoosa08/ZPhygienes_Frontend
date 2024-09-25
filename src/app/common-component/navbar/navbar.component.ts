import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showToggler: boolean = false;
  menuOpened = false;
  events: string[] = [];
  opened: boolean = false;
  constructor(
    private router: Router
  ) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log(event)
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.showToggler = window.innerWidth < 430; // Show toggler on mobile screens
  }

  ngOnInit(): void {
  }

  home() {
    this.menuOpened = !this.menuOpened
    this.router.navigate(["/home"])
  }

  ourServices() {
    this.menuOpened = !this.menuOpened
    this.router.navigate(["/our-services"])
  }
  aboutUs() {
    this.menuOpened = !this.menuOpened
    this.router.navigate(["/about-us"])
  }
  contactUs() {
    this.menuOpened = !this.menuOpened
    this.router.navigate(["/contact-us"])
  }

  signIn() {
    this.menuOpened = !this.menuOpened
    this.router.navigate(["/sign-in"])
  }

  isMenuOpen() {
   this.menuOpened = !this.menuOpened
  }
}

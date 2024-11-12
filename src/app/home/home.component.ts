import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  
  items: any[] = [
    {
      title: 'Item 1',
      description: 'Description for item 1',
      image: '/assets/images/BeforeBoikanoCouch.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description for item 2',
      image:'/assets/images/AfterBoikanoCouch.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/BeforeKhodano.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/AfterKhodanirug.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/BeforeOurRug.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/AfterOurRug.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/BeforeRug2.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/AFTERrug2.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/BeforeRugRachel.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/AfterRugRachel.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/DeforeBongzRug.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/AfterBongzRug.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/photo-output.jpg',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/images/AfterRachelCouch.jpg',
    },
  ];
  currentSlideIndex: number = 0; 
  interval: any;
  timer: number = 7000;

  constructor() {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.timer); 
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.stopAutoSlide();
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length;
    this.startAutoSlide()
  }

  prevSlide() {
    this.stopAutoSlide();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.items.length) % this.items.length;
    this.startAutoSlide()
  }


}

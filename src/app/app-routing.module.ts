import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CarSeatComponent } from './our-service/car-seat/car-seat.component';
import { ChairComponent } from './our-service/chair/chair.component';
import { CouchComponent } from './our-service/couch/couch.component';
import { HouseComponent } from './our-service/house/house.component';
import { MattressComponent } from './our-service/mattress/mattress.component';
import { OfficeComponent } from './our-service/office/office.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { RugsComponent } from './our-service/rugs/rugs.component';

const routes: Routes = [
  //Navigating to navBar pages
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-services', component: OurServiceComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },

  //Our services pages
  { path: 'our-services/couch', component: CouchComponent },
  { path: 'our-services/chair', component: ChairComponent },
  { path: 'our-services/rugs', component: RugsComponent },
  { path: 'our-services/mattress', component: MattressComponent },
  { path: 'our-services/office', component: OfficeComponent },
  { path: 'our-services/house', component: HouseComponent },
  { path: 'our-services/car-seat', component: CarSeatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { CarInteriorComponent } from './our-service/car-interior/car-interior.component';
import { CouchChairsComponent } from './our-service/couche-chairs/couch-chairs.component';
import { HomeCleaningComponent } from './our-service/home-cleaning/home-cleaning.component';
import { RugCarpetComponent } from './our-service/rug-carpet/rug-carpet.component';
import { SneakerComponent } from './our-service/sneaker/sneaker.component';
import { OfficeComponent } from './our-service/office/office.component';

const routes: Routes = [
  //Navigating to navBar pages
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-services', component: OurServiceComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },

  //Navigating to Our Services pages
  {path: 'our-services/car-interior', component: CarInteriorComponent},
  {path: 'our-services/couches-chairs', component: CouchChairsComponent},
  {path: 'our-services/home', component: HomeCleaningComponent},
  {path: 'our-services/office', component: OfficeComponent},
  {path: 'our-services/rug-carpets', component: RugCarpetComponent},
  {path: 'our-services/sneakers', component: SneakerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

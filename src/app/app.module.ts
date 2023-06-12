import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatBadgeModule } from '@angular/material/badge'
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './common-component/navbar/navbar.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CouchChairsComponent } from './our-service/couche-chairs/couch-chairs.component';
import { RugCarpetComponent } from './our-service/rug-carpet/rug-carpet.component';
import { SneakerComponent } from './our-service/sneaker/sneaker.component';
import { CarInteriorComponent } from './our-service/car-interior/car-interior.component';
import { OfficeComponent } from './our-service/office/office.component';
import { HomeCleaningComponent } from './our-service/home-cleaning/home-cleaning.component';
import { OurServicesService } from './services/our-services.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OurServiceComponent,
    AboutUsComponent,
    ContactUsComponent,
    CouchChairsComponent,
    RugCarpetComponent,
    SneakerComponent,
    CarInteriorComponent,
    OfficeComponent,
    HomeCleaningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    HttpClientModule

  ],
  providers: [
    OurServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  constructor(private http: HttpClient, private router: Router) { }

  geServiceByServiceType(serviceType: any) {
    return this.http.get(environment.API_URL + '/services/' + serviceType);
  }
}

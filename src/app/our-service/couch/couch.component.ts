import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-couch',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './couch.component.html',
  styleUrl: './couch.component.css'
})
export class CouchComponent {

}

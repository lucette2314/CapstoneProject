import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent], 
})
export class ReviewsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

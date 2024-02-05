import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent], 
})
export class OffersComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent], 
})
export class FoodComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

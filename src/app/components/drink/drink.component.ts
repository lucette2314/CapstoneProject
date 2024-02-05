import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, IonContent, HeaderComponent]
})
export class DrinkComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

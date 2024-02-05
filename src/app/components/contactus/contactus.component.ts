import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent], 
})
export class ContactusComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

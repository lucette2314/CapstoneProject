import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonCard, IonCardContent, IonIcon, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { Idrink } from 'src/app/interfaces/idrink';
import { DrinkService } from 'src/app/services/drink.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, IonContent, HeaderComponent, IonButton, IonCard, IonCardContent, IonIcon, CommonModule, IonCardHeader, IonCardTitle]
})
export class DrinkComponent  implements OnInit {

  public drinks!: Idrink[];

  constructor(private drinkService: DrinkService) { 
    this.getDrink();
  }

  ngOnInit() {}

  // ionViewDidEnter() {
  //   this.getDrink();
  // }

  getDrink() {
    this.drinkService.getDrinks().subscribe((results) => {
      this.drinks = results;
    });
  }
}
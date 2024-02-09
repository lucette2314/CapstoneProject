import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonCard, IonCardContent, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { Idrink } from 'src/app/interfaces/idrink';
import { DrinkService } from 'src/app/services/drink.service';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, IonContent, HeaderComponent, IonButton, IonCard, IonCardSubtitle, IonCardContent, IonIcon, CommonModule, IonCardHeader, IonCardTitle]
})
export class DrinkComponent  implements OnInit {

  public drinks!: Idrink[];
  public drinkcategories = [
    { id: 1, name: 'Non-Alcoholic Beverages' },
    { id: 2, name: 'Alcoholic Beverages' },
    { id: 3, name: 'Cocktails' },
    { id: 4, name: 'Smoothies and Shakes' },
  ];

  constructor(private drinkService: DrinkService, private alertController: AlertController) { 
    this.getDrink();
  }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Add Food',
      message: 'Your Food has being added successfully',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  getDrink() {
    this.drinkService.getDrinks().subscribe((results) => {
      this.drinks = results;
    });
  }

  getCategoryName(categoryId: number): string {
    const category = this.drinkcategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  }
}
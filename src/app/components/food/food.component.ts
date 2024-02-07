import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonIcon, IonButton, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { FoodService } from 'src/app/services/food.service';
import { Ifood } from 'src/app/interfaces/ifood';
import { Ifoodcategory } from 'src/app/interfaces/ifoodcategory';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent, IonIcon, IonButton, IonCardContent, IonCard, IonCardSubtitle, CommonModule, IonCardHeader, IonCardTitle], 
})
export class FoodComponent implements OnInit{

  public foods!: Ifood[];
  public foodCategories!: Ifoodcategory[];

  constructor(private foodService: FoodService, private alertController: AlertController) { 
    this.getFood();
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

  getFood() {
    this.foodService.getFoods().subscribe((results) => {
      this.foods = results;
    })
  }
}
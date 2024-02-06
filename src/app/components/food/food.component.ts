import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonIcon, IonButton, IonCardContent, IonCard, IonCardHeader, IonCardTitle} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { FoodService } from 'src/app/services/food.service';
import { Ifood } from 'src/app/interfaces/ifood';
import { Ifoodcategory } from 'src/app/interfaces/ifoodcategory';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [RouterLink, IonLabel, IonItem, HeaderComponent, IonContent, IonIcon, IonButton, IonCardContent, IonCard, CommonModule, IonCardHeader, IonCardTitle], 
})
export class FoodComponent implements OnInit{

  public foods!: Ifood[];

  constructor(private foodService: FoodService) { 
    this.getFood();
  }

  ngOnInit() {}

  // ionViewDidEnter() {
  //   this.getFood();
  // }

  getFood() {
    this.foodService.getFoods().subscribe((results) => {
      this.foods = results;
    })
  }
}
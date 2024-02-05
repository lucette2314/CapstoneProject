import { Component } from '@angular/core';
import { DrinkComponent } from '../drink/drink.component';
import { CommonModule } from '@angular/common';
import { Idrink } from '../../interfaces/idrink';
import { DrinksService } from '../../services/drinks.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, DrinkComponent, RouterLink, RouterOutlet],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  drinks!: Idrink[]

  constructor(private drinksService: DrinksService){
    drinksService.getDrinks().subscribe((results) => 
    {this.drinks = results;
    });
  }
  deleteDrink(drinkId: number){
    const index = this.drinks.findIndex(drink => {
      return drink.id === drinkId;
    });
  
    this.drinks.splice(index,1);
  
  this.drinksService.deleteDrink(drinkId).subscribe(result => {
    alert('Drink item was deleted successfully');
  });
  }
  }


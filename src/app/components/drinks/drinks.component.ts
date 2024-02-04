import { Component } from '@angular/core';
import { DrinkComponent } from '../drink/drink.component';
import { CommonModule } from '@angular/common';
import { Idrink } from '../../interfaces/idrink';
import { DrinksService } from '../../services/drinks.service';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, DrinkComponent],
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
  }


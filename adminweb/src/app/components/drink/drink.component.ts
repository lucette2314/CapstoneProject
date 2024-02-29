import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Idrink } from '../../interfaces/idrink';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Idrinkcategory } from '../../interfaces/idrinkcategory';
import { DrinkcategoryService } from '../../services/drinkcategory.service';
import { DrinksService } from '../../services/drinks.service';

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {
  categories!: Idrinkcategory[];
  drink_category_id!: number;

  @Input() drink!: Idrink;

  @Output() deleteEvent = new EventEmitter();

  constructor(private drinkCategoryService: DrinkcategoryService, private drinksservice: DrinksService) {
    this.drinkCategoryService.getcategory().subscribe(categories => {
      this.categories = categories;
      if (this.drink.drink_category_id !== undefined) {
        const category = this.categories.find(c => c.id === this.drink.drink_category_id);
        if (category) {
          this.drink.drinkcategory = category;
        }
      }
    });
  }
  
  onDelete(){
    if(confirm("Are you sure you want to delete this drink item?")){
this.deleteEvent.emit(this.drink.id);
  }}
}

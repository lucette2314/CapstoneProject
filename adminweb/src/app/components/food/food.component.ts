import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ifood } from '../../interfaces/ifood';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { Ifoodcategory } from '../../interfaces/ifoodcategory';
import { FoodcategoryService } from '../../services/foodcategory.service';
import { FoodsService} from '../../services/foods.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})

export class FoodComponent {
  categories!: Ifoodcategory[];
  food_category_id!: number;

  @Input() food!: Ifood;

  @Output() deleteEvent = new EventEmitter();

  constructor(private foodCategoryService: FoodcategoryService, private foodsservice: FoodsService) {
    this.foodCategoryService.getcategory().subscribe(categories => {
      this.categories = categories;
      if (this.food.food_category_id !== undefined) {
        const category = this.categories.find(c => c.id === this.food.food_category_id);
        if (category) {
          this.food.foodcategory = category;
        }
      }
    });
  }

  onDelete() {
    if (confirm("Are you sure you want to delete this food item?")) {
      this.deleteEvent.emit(this.food.id);
    }
  }
}
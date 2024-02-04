import { Component } from '@angular/core';
import { Ifood } from '../../interfaces/ifood';
import { CommonModule } from '@angular/common';
import { FoodComponent } from '../food/food.component';
import { FoodsService } from '../../services/foods.service';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule, FoodComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
foods!: Ifood[];

constructor(private foodsService: FoodsService){
  foodsService.getFoods().subscribe((results) => 
  {this.foods = results;
  });
}
deleteFood(foodId: number){
  const index = this.foods.findIndex(food => {
    return food.id === foodId;
  });

  this.foods.splice(index,1);
}
}


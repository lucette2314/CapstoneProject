import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodsService } from '../../services/foods.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './foodform.component.html',
  styleUrl: './foodform.component.css'
})
export class FoodformComponent {
foodForm: FormGroup;
isEditMode: boolean = false;

constructor(private formBuilder: FormBuilder, private foodsService: FoodsService, private route: ActivatedRoute){
this.foodForm = formBuilder.group({
  name: [],
  description: [],
  price: [],
  food_category_id: []
});

const foodId = this.route.snapshot.paramMap.get('food_id)');
if(foodId){
  console.log('Edit Mode');
  this.isEditMode = true;
}
}

onSubmit(){
  const formData = this.foodForm.value
  this.foodsService.createFood(formData).subscribe((result) => {
    console.log(result);
    alert("Food item was added successfully");
    this.foodForm.reset();
  })
}

get nameFormControl(){
  return this.foodForm.get('name')!;
}
}

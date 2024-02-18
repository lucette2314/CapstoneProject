import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodsService } from '../../services/foods.service';
import { ActivatedRoute, Router } from '@angular/router';



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
editFoodId: number = 0
food_image!: File;

constructor(private formBuilder: FormBuilder, private foodsService: FoodsService, private router: Router, private route: ActivatedRoute){
this.foodForm = formBuilder.group({
  name: [],
  description: [],
  price: [],
  food_category_id: [],
  image: []

});

const foodId = this.route.snapshot.paramMap.get('food_id');
  if(foodId){
    console.log('Edit Mode');
    this.isEditMode = true;
    this.editFoodId = parseInt(foodId);

    this.foodsService.getFood(this.editFoodId).subscribe(result => {
      this.foodForm.patchValue(result);
    });
  }}

  onFileSelected(event: any){
    this.food_image = event.target.files[0];
  }

  onSubmit(){
    
    let formData = new FormData();

    if (this.food_image){
      formData.append('food_image', this.food_image)}
        
  for (let key in this.foodForm.value){
    formData.append(key, this.foodForm.value[key]);
  }

    this.foodsService.createFood(formData).subscribe({
      next: (result) => {
        alert ('Food item was created successfully');
        this.router.navigate(['/foods/']);
      },
      error: (err) => {
        console.log(err);
        alert('Food item creation failed');
      }
    });
   
    if(this.isEditMode){
     this.updateFood();
   }else {
   this.createFood();
  }}
  
createFood(){
 const formData = this.foodForm.value;
  this.foodsService.createFood(formData).subscribe((result) => {
   console.log(result);
    alert("Food item was added successfully");
    this.foodForm.reset();
  });
}

updateFood(){
  const formData = this.foodForm.value;
  this.foodsService.updateFood(this.editFoodId, formData).subscribe((result) => {
    console.log(result);
    alert("Food item was updated successfully");
    this.foodForm.reset();
  });
}

get nameFormControl(){
  return this.foodForm.get('name')!;
}
}
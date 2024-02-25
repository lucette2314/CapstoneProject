import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodsService } from '../../services/foods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifoodcategory} from '../../interfaces/ifoodcategory';
import { FoodcategoryService } from '../../services/foodcategory.service';


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
categories!: Ifoodcategory[];
food_category_id!: number;
title: string = "Add New Food";

constructor(private formBuilder: FormBuilder,
  private foodsService: FoodsService,
  private router: Router,
  private route: ActivatedRoute,
  private foodcategoryService: FoodcategoryService){

  this.foodcategoryService.getcategory().subscribe(results => {
    this.categories = results;
});

this.foodForm = formBuilder.group({
  name: [""],
  description: [""],
  price: [""],
  food_category_id: [""],
  image: []
});
this.validateEditmode();
}

  validateEditmode() {
    let id = this.route.snapshot.paramMap.get("food_id");
   
      if(id){
        console.log("id", id)
      this.isEditMode = true;
      this.title = "Edit Food"
      this.editFoodId = parseInt (id);
      //Fetch edit student
      this.foodsService.getFood(this.editFoodId).subscribe(result => {
        this.foodForm.patchValue(result); //Populate web form with database data
        console.log(result);
      })
    }
  }

  onFileSelected(event: any){
    this.food_image = event.target.files[0];
  }

  onSubmit() {
    if (this.isEditMode) {
      const formDataUpdate = this.foodForm.value;
      // Update Food
      this.foodsService.updateFood(this.editFoodId, formDataUpdate).subscribe((result) => {
        console.log(result);
        alert('Food was updated successfully');
        this.router.navigate(["/foods"]); 
      });
    } else {
      const formDataCreate = new FormData();
      // Append individual form controls to formDataCreate
      formDataCreate.append('name', this.foodForm.get('name')!.value || ''); // Provide a default empty string if value is null
      formDataCreate.append('description', this.foodForm.get('description')!.value || ''); // Provide a default empty string if value is null
      formDataCreate.append("price", this.foodForm.get("price")!.value || 0);
      formDataCreate.append('food_category_id', this.foodForm.get('food_category_id')!.value);

      if (this.food_image) {
        formDataCreate.append('food_image', this.food_image);
      }
  
      // Create Food
      this.foodsService.createFood(formDataCreate).subscribe((result) => {
        console.log(result);
        alert('Food was created successfully');
        this.foodForm.reset(); // Clear web form data
        this.router.navigate(['/foods']);
      });
    }
  }}
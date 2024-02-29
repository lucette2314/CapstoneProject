import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksService } from '../../services/drinks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Idrinkcategory } from '../../interfaces/idrinkcategory';
import { DrinkcategoryService } from '../../services/drinkcategory.service';


@Component({
  selector: 'app-drinksform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './drinksform.component.html',
  styleUrl: './drinksform.component.css'
})
export class DrinksformComponent {
  drinkForm!: FormGroup;
  isEditMode: boolean = false;
  editDrinkId: number = 0
  drink_image!: File;
  categories!: Idrinkcategory[];
  drink_category_id!: number;
  title: string = "Add New Drink";
  
  constructor(private formBuilder: FormBuilder,
    private drinksService: DrinksService,
    private router: Router,
    private route: ActivatedRoute,
    private drinkcategoryService: DrinkcategoryService){
  
    this.drinkcategoryService.getcategory().subscribe(results => {
      this.categories = results;
  });
  
  this.drinkForm = formBuilder.group({
    name: [""],
    description: [""],
    price: [""],
    drink_category_id: [""],
    image: []
  });
  this.validateEditmode();
  }
  
    validateEditmode() {
      let id = this.route.snapshot.paramMap.get("drink_id");
     
        if(id){
          console.log("id", id)
        this.isEditMode = true;
        this.title = "Edit Drink"
        this.editDrinkId = parseInt (id);
        //Fetch edit student
        this.drinksService.getDrink(this.editDrinkId).subscribe(result => {
          this.drinkForm.patchValue(result); //Populate web form with database data
          console.log(result);
        })
      }
    }
  
    onFileSelected(event: any){
      this.drink_image = event.target.files[0];
    }
  
    onSubmit() {
      if (this.isEditMode) {
        const formDataUpdate = this.drinkForm.value;
        // Update Drink
        this.drinksService.updateDrink(this.editDrinkId, formDataUpdate).subscribe((result) => {
          console.log(result);
          alert('Drink was updated successfully');
          this.router.navigate(["/drinks"]); 
        });
      } else {
        const formDataCreate = new FormData();
        // Append individual form controls to formDataCreate
        formDataCreate.append('name', this.drinkForm.get('name')!.value || ''); // Provide a default empty string if value is null
        formDataCreate.append('description', this.drinkForm.get('description')!.value || ''); // Provide a default empty string if value is null
        formDataCreate.append("price", this.drinkForm.get("price")!.value || 0);
        formDataCreate.append('drink_category_id', this.drinkForm.get('drink_category_id')!.value);
  
        if (this.drink_image) {
          formDataCreate.append('drink_image', this.drink_image);
        }
    
        // Create Drink
        this.drinksService.createDrink(formDataCreate).subscribe((result) => {
          console.log(result);
          alert('Drink was created successfully');
          this.drinkForm.reset(); // Clear web form data
          this.router.navigate(['/drinks']);
        });
      }
    }}
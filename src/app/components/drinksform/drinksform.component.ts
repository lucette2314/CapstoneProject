import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksService } from '../../services/drinks.service';

@Component({
  selector: 'app-drinksform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './drinksform.component.html',
  styleUrl: './drinksform.component.css'
})
export class DrinksformComponent {
drinkForm: FormGroup;

constructor(private formBuilder: FormBuilder, private drinksService: DrinksService){
  this.drinkForm = formBuilder.group({
    name: [],
    description: [],
    price: [],
    drink_category_id: []
  });
  }
  onSubmit(){
    const formData = this.drinkForm.value
    this.drinksService.createDrink(formData).subscribe((result) => {
      console.log(result);
      alert("Drink item was added successfully");
      this.drinkForm.reset();
    })
  }}



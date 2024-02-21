import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksService } from '../../services/drinks.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-drinksform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './drinksform.component.html',
  styleUrl: './drinksform.component.css'
})
export class DrinksformComponent {
drinkForm: FormGroup;
isEditMode: boolean = false;
editDrinkId: number = 0;
drink_image!: File;

constructor(private formBuilder: FormBuilder, private drinksService: DrinksService, private route: ActivatedRoute, private router: Router){
  this.drinkForm = formBuilder.group({
    name: [],
    description: [],
    price: [],
    drink_category_id: [],
    image: []
  });

  const drinkId = this.route.snapshot.paramMap.get('drink_id');
  if(drinkId){
    console.log('Edit Mode');
    this.isEditMode = true;
    this.editDrinkId = parseInt(drinkId);
    this.drinksService.getDrink(this.editDrinkId).subscribe(result => {
      this.drinkForm.patchValue(result);
    });
  }
  }

  onFileSelected(event: any){
    this.drink_image = event.target.files[0];
  }

  onSubmit(){
    let formData = new FormData();

    if (this.drink_image){
      formData.append('drink_image', this.drink_image)}
        
  for (let key in this.drinkForm.value){
    formData.append(key, this.drinkForm.value[key]);
  }

    this.drinksService.createDrink(formData).subscribe({
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
      this.updateDrink();
    }else {
    this.createDrink();
  }
  }
createDrink(){
  const formData = this.drinkForm.value;
  this.drinksService.createDrink(formData).subscribe((result) => {
    console.log(result);
    alert("Drink item was added successfully");
    this.drinkForm.reset();
  });
}

updateDrink(){
  const formData = this.drinkForm.value;
  this.drinksService.updateDrink(this.editDrinkId, formData).subscribe((result) => {
    console.log(result);
    alert("Drink item was updated successfully");
    this.drinkForm.reset();
  });

}
}




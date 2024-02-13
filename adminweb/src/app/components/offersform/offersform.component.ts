import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-offersform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './offersform.component.html',
  styleUrl: './offersform.component.css'
})
export class OffersformComponent {
  offerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private offersService: OffersService){
  this.offerForm = formBuilder.group({
    title: [],
    description: [],
    discount: [],
    valid_from: [],
    valid_to: []
  });
  }
  onSubmit(){
    const formData = this.offerForm.value
    this.offersService.createOffer(formData).subscribe((result) => {
      console.log(result);
      alert("Offer was added successfully");
      this.offerForm.reset();
    })
  }
}

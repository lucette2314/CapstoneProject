import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffersService } from '../../services/offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offersform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './offersform.component.html',
  styleUrl: './offersform.component.css'
})
export class OffersformComponent {
  offerForm: FormGroup;
  isEditMode: boolean = false;
  editOfferId: number = 0;

  constructor(private formBuilder: FormBuilder, private offersService: OffersService, private route: ActivatedRoute){
  this.offerForm = formBuilder.group({
    title: [],
    description: [],
    discount: [],
    valid_from: [],
    valid_to: []
  });
  const offerId = this.route.snapshot.paramMap.get('offer_id');
  if(offerId){
    console.log('Edit Mode');
    this.isEditMode = true;
    this.editOfferId = parseInt(offerId);
    this.offersService.getOffer(this.editOfferId).subscribe(result => {
      this.offerForm.patchValue(result);
    });
  }
  }
  onSubmit(){
    if(this.isEditMode){
      this.updateOffer();
    }else {
    this.createOffer();
  }
  }
createOffer(){
  const formData = this.offerForm.value;
  this.offersService.createOffer(formData).subscribe((result) => {
    console.log(result);
    alert("Offer was added successfully");
    this.offerForm.reset();
  });
}

updateOffer(){
  const formData = this.offerForm.value;
  this.offersService.updateOffer(this.editOfferId, formData).subscribe((result) => {
    console.log(result);
    alert("Offer was updated successfully");
    this.offerForm.reset();
  });

}
}

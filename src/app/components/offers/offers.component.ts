import { Component } from '@angular/core';
import { Ioffer } from '../../interfaces/ioffer';
import { OfferComponent } from '../offer/offer.component';
import { OffersService } from '../../services/offers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, OfferComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  offers!: Ioffer[];

  constructor(private offersService: OffersService){
    offersService.getOffers().subscribe((results) => 
    {this.offers = results;
    });
  }
}

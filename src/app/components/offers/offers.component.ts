import { Component } from '@angular/core';
import { Ioffer } from '../../interfaces/ioffer';
import { OfferComponent } from '../offer/offer.component';
import { OffersService } from '../../services/offers.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, OfferComponent, RouterLink, RouterOutlet],
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
  deleteOffer(offerId: number){
    const index = this.offers.findIndex(offer => {
      return offer.id === offerId;
    });
  
    this.offers.splice(index,1);
  
  this.offersService.deleteOffer(offerId).subscribe(result => {
    alert('Offer was deleted successfully');
  });
  }
}

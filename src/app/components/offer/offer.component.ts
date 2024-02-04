import { Component, Input } from '@angular/core';
import { Ioffer } from '../../interfaces/ioffer';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
  @Input() offer!: Ioffer
}

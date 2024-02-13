import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() deleteEvent = new EventEmitter();

  onDelete(){
    if(confirm("Are you sure you want to delete this offer?")){
this.deleteEvent.emit(this.offer.id);
  }}
}

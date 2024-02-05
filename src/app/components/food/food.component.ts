import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ifood } from '../../interfaces/ifood';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  
@Input() food!: Ifood;

@Output() deleteEvent = new EventEmitter();

  onDelete(){
    if(confirm("Are you sure you want to delete this food item?")){
this.deleteEvent.emit(this.food.id);
  }}
}


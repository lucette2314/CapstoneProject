import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Idrink } from '../../interfaces/idrink';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {
  @Input() drink!: Idrink
  @Output() deleteEvent = new EventEmitter();

  onDelete(){
    if(confirm("Are you sure you want to delete this drink item?")){
this.deleteEvent.emit(this.drink.id);
  }}
}

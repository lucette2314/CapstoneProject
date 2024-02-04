import { Component, Input } from '@angular/core';
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
}

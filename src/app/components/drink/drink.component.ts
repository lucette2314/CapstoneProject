import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class DrinkComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

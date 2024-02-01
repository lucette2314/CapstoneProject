import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class AboutusComponent  implements OnInit {
  title: string = "Garden of Eat'n"
  constructor() { }

  ngOnInit() {}

}

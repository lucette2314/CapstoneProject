import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonTextarea, IonHeader, IonToolbar, IonTitle, IonInput, IonList, IonCard, IonCardContent} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,
  imports: [RouterLink, FormsModule, IonLabel, IonItem, HeaderComponent, IonContent, IonButton, IonTextarea, IonHeader, IonToolbar, IonTitle, IonInput, CommonModule, IonList, IonCardContent, 
            IonCard], 
})

export class ContactusComponent implements OnInit {

  name: string = "";
  email: string = "";
  message: string = "";

  constructor() { }

  ngOnInit() {
    console.log('Component initialized');
  }

  ionViewDidEnter() {
    console.log('Page entered');
  }

  sendMessage() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
  
    // Reset form fields after sending the message
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}

  

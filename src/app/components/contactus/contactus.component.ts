import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItem, IonContent, IonButton, IonTextarea, IonHeader, IonToolbar, IonTitle, IonInput, IonList} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,
  providers: [EmailComposer],
  imports: [RouterLink, IonicModule, FormsModule, IonLabel, IonItem, HeaderComponent, IonContent, IonButton, IonTextarea, IonHeader, IonToolbar, IonTitle, IonInput, CommonModule, IonList], 
})
export class ContactusComponent {

  constructor(private emailComposer: EmailComposer) {}

  emailOptions = {to: '', cc: '', bcc: '', subject: '', body: ''};
  async openEmail() {
    const email = {
      to: this.emailOptions.to,
      cc: this.emailOptions.cc,
      bcc: this.emailOptions.bcc,
      subject: this.emailOptions.subject,
      body: this.emailOptions.body
    };
    await this.emailComposer.open(email);
    console.log('opened');
  }
}
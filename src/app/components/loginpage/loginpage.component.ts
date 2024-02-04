import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { avoidWord } from '../../customvalidation';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.loginForm = formBuilder.group({
      email: ['',[Validators.required, Validators.email, avoidWord]],
      password: ['', [Validators.required, Validators.minLength(8), avoidWord]]
    });
  }
onLogin(){
  console.log(this.loginForm.value);
}

get emailFormControl(){
  return this.loginForm.get('email')!;
}
get passwordFormControl(){
  return this.loginForm.get('password')!;
}
}

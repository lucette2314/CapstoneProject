import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { avoidWord } from '../../customvalidation';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService){
    this.loginForm = formBuilder.group({
      email: ['',[Validators.required, Validators.email, avoidWord]],
      password: ['', [Validators.required, Validators.minLength(8), avoidWord]]
    });
  }

onLogin(){
  this.userService.loginUser(this.loginForm.value).subscribe({
    next: (result) => {
      localStorage.setItem('auth_token', result.token); //Saves the token to our web browser local storage
      alert('Login was successful');
    },
    error: (err) => {
      console.log(err);
      alert('Login failed');
    }
  });
}
};

// get emailFormControl(){
//   return this.loginForm.get('email')!;
// }
// get passwordFormControl(){
//   return this.loginForm.get('password')!;
// }
// }

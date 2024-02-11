import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';
import { avoidWord } from '../../customvalidation';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService){
    this.loginForm = formBuilder.group({
      email: ['',[Validators.required, Validators.email, avoidWord]],
      password: ['', [Validators.required, Validators.minLength(8), avoidWord]]
    });
  }

Login(){
  this.userService.loginUser(this.loginForm.value).subscribe({
    next: (result) => {
      localStorage.setItem('auth_token', result.token);
      alert('Login was successful');
      this.router.navigate(['/home']);
    },
    error: (err) => {
console.log(err);
alert('Login failed');
    }
  })
}

get emailFormControl(){
  return this.loginForm.get('email')!;
}
get passwordFormControl(){
  return this.loginForm.get('password')!;
}
}

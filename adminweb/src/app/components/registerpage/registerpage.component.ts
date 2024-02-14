import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService){
    this.registerForm = formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  register(){
    const formData = this.registerForm.value;
    this.userService.createUser(formData).subscribe((result) => {
      console.log(result);
      alert('User registered successfully');
      this.registerForm.reset();
    })
      error: (err: any) => {
        console.log(err);
        alert('Registration failed');
      }
    };

}

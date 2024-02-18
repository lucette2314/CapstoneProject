import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(){
    if(!this.userService.getToken()){
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

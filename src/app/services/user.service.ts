import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData: any){
    return this.http.post<Iuser>('http://localhost:3000/auth/register', formData);
  };

  loginUser(formData: any){
    return this.http.post<any>('http://localhost:3000/auth/login', formData);
  };

  getToken(){
    return localStorage.getItem('auth_token');
  };
};

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idrink } from '../interfaces/idrink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient) { }

  getDrinks(){
    return this.http.get<Idrink[]>('http://localhost:3000/drinks')
  }
  createDrink(formData: any){
      return this.http.post<Idrink>('http://localhost:3000/drinks', formData);
}
}

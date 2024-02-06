import { Injectable } from '@angular/core';
import { Idrink } from '../interfaces/idrink';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getDrinks(){
    return this.http.get<Idrink[]>('http://localhost:3000/drinks');
  }
  deleteDrinks(drink_id: number){
    return this.http.delete<any>(`http://localhost:3000/drinks/${drink_id}`);
  }
  createDrinks(formData: any){
    return this.http.post<Idrink>('http://localhost:3000/drinks', formData);
  }
  // getFood(drink_id: number){
  //   return this.http.get<Ifood>(`http://localhost:3000/drinks/${food_id}`);
  // }
  updateDrinks(drink_id:number, formData: any){
    return this.http.patch<Idrink>(`http://localhost:3000/drinks/${drink_id}`, formData);
  }
}
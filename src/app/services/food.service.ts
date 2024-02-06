import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifood } from '../interfaces/ifood';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoods(){
    return this.http.get<Ifood[]>('http://localhost:3000/foods');
  }
  deleteFood(food_id: number){
    return this.http.delete<any>(`http://localhost:3000/foods/${food_id}`);
  }
  createFood(formData: any){
    return this.http.post<Ifood>('http://localhost:3000/foods', formData);
  }
  // getFood(food_id: number){
  //   return this.http.get<Ifood>(`http://localhost:3000/foods/${food_id}`);
  // }
  updateFood(food_id:number, formData: any){
    return this.http.patch<Ifood>(`http://localhost:3000/foods/${food_id}`, formData);
  }
}
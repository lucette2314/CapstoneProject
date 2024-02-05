import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ifood } from '../interfaces/ifood';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http: HttpClient) { }

  getFoods(){
    return this.http.get<Ifood[]>('http://localhost:3000/foods')
  }

  createFood(formData: any){
    return this.http.post<Ifood>('http://localhost:3000/foods', formData);
  }

  getFood(foodId: number){
    return this.http.get<Ifood>(`http://localhost:3000/foods/${foodId}`);
  }
  deleteFood(foodId: number){
    return this.http.delete<Ifood>(`http://localhost:3000/foods/${foodId}`);
  }
}

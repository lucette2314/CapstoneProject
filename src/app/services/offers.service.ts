import { Injectable } from '@angular/core';
import { Ioffers } from '../interfaces/ioffers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(){
    return this.http.get<Ioffers[]>('http://localhost:3000/promotions');
  }
  // deleteFood(food_id: number){
  //   return this.http.delete<any>(`http://localhost:3000/foods/${food_id}`);
  // }
  // createFood(formData: any){
  //   return this.http.post<Ioffers>('http://localhost:3000/foods', formData);
  // }
  // // getFood(food_id: number){
  // //   return this.http.get<Ifood>(`http://localhost:3000/foods/${food_id}`);
  // // }
  // updateFood(food_id:number, formData: any){
  //   return this.http.patch<Ioffers>(`http://localhost:3000/foods/${food_id}`, formData);
  // }
}
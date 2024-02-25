import { Injectable } from '@angular/core';
import { Ifoodcategory } from '../interfaces/ifoodcategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodcategoryService {
  constructor(private http: HttpClient) { }

  getcategory(){
    return this.http.get<Ifoodcategory[]>('http://localhost:3000/food_categories')
  }
}
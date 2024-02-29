import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idrinkcategory } from '../interfaces/idrinkcategory';

@Injectable({
  providedIn: 'root'
})
export class DrinkcategoryService {
  constructor(private http: HttpClient) { }

  getcategory(){
    return this.http.get<Idrinkcategory[]>('http://localhost:3000/drink_categories')
  }
}
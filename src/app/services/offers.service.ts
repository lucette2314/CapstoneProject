import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ioffer } from '../interfaces/ioffer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(){
    return this.http.get<Ioffer[]>('http://localhost:3000/promotions')
  }
  createOffer(formData: any){
    return this.http.post<Ioffer>('http://localhost:3000/promotions', formData);
}
deleteOffer(offerId: number){
  return this.http.delete<Ioffer>(`http://localhost:3000/promotions/${offerId}`);
}
}

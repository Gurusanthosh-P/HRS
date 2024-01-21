import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelnameService {

  constructor() {
    
   }

  hotelNameSubject:string=''

  setHotelName(hotelName:string) {
    this.hotelNameSubject=hotelName
    
  }
  
  getHotelName(){
    return this.hotelNameSubject;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';


  // private baseUrl = 'https://api.tomorrow.io/v4/weather/realtime';
  // private apiKey = 'RGT3tBoZhaAQ59adQ4IGUBPCtfDCc4QK'

  constructor(private http:HttpClient) { }


  

  
  getWeatherData(location:string):Observable<any>{

    // const url1 = `${this.baseUrl}?apikey=${this.apiKey}&location=${location}`
    const apiKey = '77e8906fefmsh81ed2d3a9b1869ap102f4cjsna511041e4449'; 

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    })

    const options = {headers:headers,params:{city:location}}
    return this.http.get<any>(this.url,options)

  }
}

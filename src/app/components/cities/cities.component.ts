import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from 'src/app/API/api';
import { cities } from 'src/app/UI assets/cities';
import { homeMessages } from 'src/app/messages/homeMessages';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit{

  cities:any[]=cities


  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
  }


  reviewCity(param:any){
      this.router.navigate(['cityhotels'],{
        queryParams:{
          id:1,
          hotels:param,
          access:true
        }
      })
  }


}

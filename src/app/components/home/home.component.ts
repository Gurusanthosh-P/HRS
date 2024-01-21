import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { api } from 'src/app/API/api';
import { dropdown } from 'src/app/UI assets/dropdown';
import { cities } from 'src/app/UI assets/cities';
import { navbar } from 'src/app/UI assets/navbar';
import { homeMessages } from 'src/app/messages/homeMessages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  header:string=homeMessages.header


  constructor(private http:HttpClient){}

  ngOnInit(): void {
    
  }


  


}

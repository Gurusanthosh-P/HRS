import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/httpService/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  userLocation:string=''
  DataToContent:any

  constructor(private httpService:HttpService) { }

  ngOnInit() {
  }


  sendToShow(event:any){
    this.DataToContent = event    
  }

  showLocation(event:string){
    this.userLocation = event    
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { kvphotels, maduraihotels, tvlhotels } from 'src/app/UI assets/cityhotels';
import { ApiReviewComponent } from '../api-review/api-review.component';
import { HotelnameService } from 'src/app/services/hotelname.service';

@Component({
  selector: 'app-cityhotels',
  templateUrl: './cityhotels.component.html',
  styleUrls: ['./cityhotels.component.scss']
})
export class CityhotelsComponent {
  reviewDataArray: any;
  cityName:string=''
  reviewDialog: DynamicDialogRef | undefined;
  sortArray:any[]=[]
  ratingClick:boolean=true

  constructor(private http:HttpClient,
    private activateRoute:ActivatedRoute,
    private dialogService:DialogService,
    private hotelNameService:HotelnameService)
    {   
      this.getHotels()
    }
    
    ngOnit(){}


  getHotels(){
    this.activateRoute.queryParams.subscribe((data)=>
        {
          this.cityName=data['hotels'];          
        })

          switch (this.cityName){
            
            case 'Kovilpatti':
              this.reviewDataArray = kvphotels;
              break;

            case 'Madurai':
              this.reviewDataArray = maduraihotels
              break

            case 'Thirunelveli':
              this.reviewDataArray = tvlhotels
              break

            default:
              break
          }
  }

  

  showReview(hotelName:any){
    console.log(hotelName);
    
    if(hotelName)
    { 
        this.hotelNameService.setHotelName(hotelName)
        this.reviewDialog = this.dialogService.open(ApiReviewComponent,{
          header: 'Reviews',
          width: '70%',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
          maximizable: true
      });
      
    }
  }

  sortByRating() {
      switch (this.cityName)
      {
        case 'kovilpatti':
          this.sortArray = kvphotels; 
          break;
        case 'Thirunelveli':
          this.sortArray = tvlhotels;
          break
        case 'Madurai':
          this.sortArray = maduraihotels
          break
        default:
          this.sortArray = kvphotels
          break
  
      }

      if(this.ratingClick)
      {
          this.sortArray.sort((a,b)=>parseFloat(a.rating)-parseFloat(b.rating))
      }
      else{
          this.sortArray.sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating))
      }
      this.ratingClick=!this.ratingClick
  }
  

}

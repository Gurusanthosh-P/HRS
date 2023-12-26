import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { api } from 'src/app/API/api';
import { loader } from 'src/app/loader/loader';
import { message } from 'src/app/messages/loginMessage';
import { HotelnameService } from 'src/app/services/hotelname.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-review',
  templateUrl: './api-review.component.html',
  styleUrls: ['./api-review.component.scss']
})
export class ApiReviewComponent implements OnInit {


  ngHotelName: any = ''
  apiDataArray: any[] = []
  userReviewArray: any[] = []
  noreview:string=''

  constructor(
    private http: HttpClient, 
    private hotelNameService: HotelnameService,
    private load:loader,
    private router:Router
    
  ) {}


  ngOnInit(): void {
    this.showReview()
    this.load.showloader()
  }

  showReview(){
    this.http.get(api.reviewApi).subscribe((data: any) => {
      this.load.hideloader()
      this.apiDataArray = data
      this.ngHotelName = this.hotelNameService.getHotelName()

      if (this.ngHotelName) {
        this.userReviewArray = this.apiDataArray.filter((item: any) => {
          return item.hotelname === this.ngHotelName;
        });

        if (this.userReviewArray.length === 0) {
            this.noreview = 'No review'
        }
      }
      else {
        this.userReviewArray = this.apiDataArray
      }

    },
    (error:any)=>{
      console.log(error);
      this.router.navigate(['cityhotels'],{
        queryParams:{
          id:1,
          access:true
        }
      })
      Swal.fire('Error',error.name,'error')
      this.load.hideloader()
      
    })


  }



}

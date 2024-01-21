import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { api } from 'src/app/API/api';
import { dropdown } from 'src/app/UI assets/dropdown';
import { message } from 'src/app/messages/loginMessage';
import { reviewMessage } from 'src/app/messages/reviewMessage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  reviewAccess:string=''
  reviewerName:string=''
  hotelname:any
  rating:any
  suggestion:string=''
  dropDown:any[]=[];

  
  constructor(private activateRouter:ActivatedRoute,private router:Router,private http:HttpClient){
    activateRouter.queryParams.subscribe((res)=>{
        this.reviewAccess=res['name']              
    })    
    
  }

  ngOnInit(): void {
      this.dropDown=dropdown
  }

  submitForm(){
    this.rating = Math.max(1, Math.min(this.rating, 5));
    const formData = {
      hotelname:this.hotelname.name,
      rating:this.rating,
      suggestion:this.suggestion,
      reviewerName:this.reviewerName
    }
    this.submit(formData)    
    
  }

  
  submit(data:any){
    if( this.rating && this.suggestion)
    {
      this.router.navigate([''])
      this.http.post(api.reviewApi,data).subscribe((data)=>{
        // console.log(data);        
      })
      
      Swal.fire(reviewMessage.ReviewSuccess,reviewMessage.Thankyou,'success')
    }

    else{
      Swal.fire(reviewMessage.ReviewFailed,reviewMessage.ReviewError,'error')
    }
  }
}

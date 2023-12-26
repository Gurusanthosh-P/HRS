import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { message } from 'src/app/messages/loginMessage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:any
  password:any
  token:any
  logInOut:string=''
  constructor(private activateRouter:ActivatedRoute,private router:Router){}


  
  login(){
    
    if(this.username && this.password)    
    {
      Swal.fire(message.loginSuccess,message.welcome,'success')
      if(Swal)
      {
        localStorage.setItem('token',Math.random().toString())        
        this.router.navigate([''],{
          queryParams:{
            button:'logout',
            name:this.username,
          }
        })
      }
      this.logInOut = message.logout
    }
    else{
      Swal.fire(message.LoginFailed,message.Error,'error')
    }
  }
}

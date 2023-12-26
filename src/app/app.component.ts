import { Component, ElementRef, ViewChild } from '@angular/core';
import { navbar } from './UI assets/navbar';
import { ActivatedRoute, Router } from '@angular/router';
import { message } from './messages/loginMessage';
import Swal from 'sweetalert2';
import { loader } from './loader/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('audioPlayer') musicRef!: ElementRef<HTMLAudioElement>;
  isMusic:boolean=false

  title = 'Hotel_review_system';
  navMenu = navbar.navbar;
  navLogo=navbar.navlogo
  loginCheck:string = ''
  logInOut:string=message.login
  music=navbar.musicSrc


  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private load:loader){
    this.ngOnit() 

  }

  ngOnit(){
    this.logInOutToggle()

  }

    //login logout toggle
  logInOutToggle(){
    this.activatedRoute.queryParams.subscribe((response)=>{
      this.loginCheck = response['button']
      if(this.loginCheck === 'logout')
      {
        this.logInOut = message.logout
      }
      
    })

  }

  //Audio playing
  musicPlay(){  
    const audioPlayer = this.musicRef.nativeElement;    
    if (audioPlayer.paused) {
      audioPlayer.play();
      this.isMusic = true;
    } else {
      audioPlayer.pause();
      this.isMusic = false;
    }
  }

  //login navigation
  login(value:any){
    if(value==message.login)
    {
      this.router.navigate(['login'],{
        queryParams:{
          id:1,
          name:''
        }
      })
    }
    else if(value == message.logout)
    {
      this.router.navigate([''])
      localStorage.removeItem('token')
      this.logInOut = message.login
      Swal.fire(message.logoutSuccess,message.ThankYou,'success')
    }
    
  }

  //review navigation
  review(){
    this.router.navigate(['review'],{
      queryParams:{
        id:'1',
        access:'true',
      }
    })
  }

  //cities navigation
  cities(){
    this.router.navigate(['cities'],{
      queryParams:{
        id:1,
        name:'citiies'
      }
    })
  }


  //socialmedia naviagtion
  socialMedia(logo:any){
    console.log('logo');
    
    switch(logo){
      case 'pi-youtube':
        window.location.href = 'https://www.youtube.com'
        break
      
      case 'pi-facebook':
        window.location.href= 'https://www.facebook.com'
        break

      case 'pi-instagram':
        window.location.href = 'https://www.instagram.com'
        break;

      default:
        break;
    }
  }
}

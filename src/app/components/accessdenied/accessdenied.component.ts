import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './accessdenied.component.html',
  styleUrls: ['./accessdenied.component.scss']
})
export class AccessdeniedComponent {

  
      constructor(private router:Router){}
      
      ngOnit(){

      }
      
      login(){
        this.router.navigate(['login'],{
          queryParams:{
            id:1,
            name:''
          }
        })
        
      }

}

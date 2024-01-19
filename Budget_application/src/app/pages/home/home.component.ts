import { Component, OnInit } from '@angular/core';
import { navbarAssets } from 'src/app/headers/navbar_contents/navbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  navbar = navbarAssets
  access : any

  ngOnInit(): void {
    
  }

  show(getAccess:any){    
    switch(getAccess){
      case 'Add':
        this.access = 'form'
        break
      case 'Income':
        this.access = 'income'
        break
      case 'Expenses':
        this.access = 'expenses'
        break
      default:
        break
    }
  }

}

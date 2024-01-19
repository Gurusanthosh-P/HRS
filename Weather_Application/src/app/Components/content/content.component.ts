import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { apiKeys, header } from 'src/app/apiKeys/apikeys';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent  implements OnInit {

  @Input() DataToContent:any
  @Input() userLocation:string=''
  keys = apiKeys
  header = header

  constructor() { }

  ngOnInit() {
    
  }
  
  
}

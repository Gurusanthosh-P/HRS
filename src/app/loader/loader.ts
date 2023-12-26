import { Injectable } from '@angular/core'
import {NgxSpinnerService} from 'ngx-spinner'

@Injectable()
export class loader{

    constructor(private load:NgxSpinnerService){}
    showloader(){
        this.load.show()
    }

    hideloader(){
        this.load.hide()
    }
}
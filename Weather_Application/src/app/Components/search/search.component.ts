import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { catchError, map, throwError } from 'rxjs';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { LoaderService } from 'src/app/Services/loader/loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  @Output() dataToShow = new EventEmitter<any>()
  @Output() showLocation = new EventEmitter<string>()
  location:any
  toast:string=''


  constructor(
    private httpService:HttpService,
    private loaderService:LoaderService,
    private toastController:ToastController) { }

  ngOnInit() {}


  search() {
    this.loaderService?.loadingShow()
    this.httpService?.getWeatherData(this.location)?.pipe(
      map((response: any) => {
        if (response && response?.sunrise && response?.sunset) {
          response.sunrise = moment.unix(response?.sunrise).format('hh:mm A');
          response.sunset = moment.unix(response?.sunset).format('hh:mm A')
          response.temp = `${response?.temp}°C`
          response.max_temp = `${response?.max_temp}°C`
          response.wind_speed = `${response?.wind_speed} m/s`
        }
        return response; 
      })
    )
    .subscribe({
      next: (formattedResponse: any) => {
        this.dataToShow.emit(formattedResponse);
        this.showLocation.emit(this.location)
        this.loaderService?.loadingHide()
      },
      error: (error: any) => {
        this.loaderService?.loadingHide()
        this.toast = 'Enter the Correct City'
        this.dataToShow.emit('')
        this.showLocation.emit('')
        this.presentToast('middle')
      }
    });
  }
  
  clearLocation(){
    this.location = ''
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: this.toast,
      duration: 1500,
      position: position
    });
    await toast.present();
  }

}

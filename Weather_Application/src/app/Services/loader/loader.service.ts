import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: any; 

  constructor(private loadingController: LoadingController) { }

  async loadingShow() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      translucent: true
    });

    await this.loading.present();
    
  }

  loadingHide() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}

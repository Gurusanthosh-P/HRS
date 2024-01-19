import { ContentChild, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpService } from './Services/httpService/http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
     AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

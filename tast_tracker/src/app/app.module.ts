import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/home-page/home-page.component';

import {DropdownModule} from 'primeng/dropdown'
import {ButtonModule} from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast'
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from './Services/userData/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ToastModule
  ],
  providers: [MessageService,ProductService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea'
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import {FieldsetModule} from 'primeng/fieldset'
import { NgxSpinnerModule } from "ngx-spinner";
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DataViewModule } from 'primeng/dataview';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityhotelsComponent } from './components/cityhotels/cityhotels.component';
import { ApiReviewComponent } from './components/api-review/api-review.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { loader } from './loader/loader';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    HomeComponent,
    AccessdeniedComponent,
    CitiesComponent,
    CityhotelsComponent,
    ApiReviewComponent,
    ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CardModule,
    SplitterModule,
    FieldsetModule,
    HttpClientModule,
    NgxSpinnerModule,
    DropdownModule,
    DynamicDialogModule,
    DataViewModule,
    ProgressBarModule,
    ProgressSpinnerModule
  ],
  providers: [loader,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

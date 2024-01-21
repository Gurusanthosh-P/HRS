import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { tokenGuard } from './authGuard/token.guard';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityhotelsComponent } from './components/cityhotels/cityhotels.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'review',component:SignupComponent,canActivate:[tokenGuard]},
  {path:'aboutus',component:AboutusComponent},
  {path:'accessdenied',component:AccessdeniedComponent},
  {path:'cities',component:CitiesComponent},
  {path:'cityhotels',component:CityhotelsComponent},
  {path:'**',component:ErrorHandlingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

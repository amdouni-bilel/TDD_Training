import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeapYearComponent} from "./leap-year/leap-year.component";
import {AverageComponent} from "./average/average.component";
import {PasswordValidatorComponent} from "./password-validator/password-validator.component";

const routes: Routes = [
  { path: 'leap-year', component: LeapYearComponent },
  { path: 'average', component: AverageComponent },
  { path: 'password-validator', component: PasswordValidatorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

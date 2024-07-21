import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeapYearComponent} from "./leap-year/leap-year.component";
import {AverageComponent} from "./average/average.component";

const routes: Routes = [
  { path: 'leap-year', component: LeapYearComponent },
  { path: 'average', component: AverageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

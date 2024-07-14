import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DogYearsConverterComponent } from './dog-years-converter/dog-years-converter.component';
import { WordStatisticsComponent } from './word-statistics/word-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DogYearsConverterComponent,
    WordStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

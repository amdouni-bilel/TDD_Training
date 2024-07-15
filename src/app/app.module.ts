import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DogYearsConverterComponent } from './dog-years-converter/dog-years-converter.component';
import { WordStatisticsComponent } from './word-statistics/word-statistics.component';
import { TimeToWordsComponent } from './time-to-words/time-to-words.component';
import { NameFormatterComponent } from './name-formatter/name-formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DogYearsConverterComponent,
    WordStatisticsComponent,
    TimeToWordsComponent,
    NameFormatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

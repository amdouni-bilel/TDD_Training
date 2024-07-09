import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-years-converter',
  templateUrl: './dog-years-converter.component.html',
  styleUrls: ['./dog-years-converter.component.css']
})
export class DogYearsConverterComponent {

  convertToHumanYears(dogYears: number): number {
    return dogYears * 7;
  }
}

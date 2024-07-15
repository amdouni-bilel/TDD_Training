import { Component } from '@angular/core';

@Component({
  selector: 'app-leap-year',
  templateUrl: './leap-year.component.html',
  styleUrls: ['./leap-year.component.css']
})
export class LeapYearComponent {

  yearToCheck: any;
  isLeap: any;

  checkLeapYear() {
    if ((this.yearToCheck % 4 === 0 && this.yearToCheck % 100 !== 0) || this.yearToCheck % 400 === 0) {
      this.isLeap = true;
    } else {
      this.isLeap = false;
    }
  }

}

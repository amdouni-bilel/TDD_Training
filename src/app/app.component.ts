import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-front';

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

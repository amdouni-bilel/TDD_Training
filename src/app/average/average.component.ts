import { Component } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent {
  numbersInput: string = '';
  average: number | null = null;

  calculateAverage() {
    const numbers = this.numbersInput.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numbers.length === 0) {
      this.average = 0;
    } else {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      this.average = sum / numbers.length;
    }
  }
}

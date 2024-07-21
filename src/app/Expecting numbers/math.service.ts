import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class MathService {
  sum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return this.sum(numbers) / numbers.length;
  }
}


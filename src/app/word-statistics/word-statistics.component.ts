import { Component } from '@angular/core';

@Component({
  selector: 'app-word-statistics',
  templateUrl: './word-statistics.component.html',
  styleUrls: ['./word-statistics.component.css']
})
export class WordStatisticsComponent {

  constructor() { }

  getAverageWordLength(sentence: string): number {
    return 1;
  }
}

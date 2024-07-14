import { Component } from '@angular/core';

@Component({
  selector: 'app-word-statistics',
  templateUrl: './word-statistics.component.html',
  styleUrls: ['./word-statistics.component.css']
})
export class WordStatisticsComponent {

  constructor() { }

  getAverageWordLength(sentence: string): number {
    const words = sentence.split(' ').filter(word => word.length > 0);
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return Math.round(totalLength / words.length);
  }


}

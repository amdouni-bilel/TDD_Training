import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordCounterService {

  constructor() { }

  countWords(string: string): number {
    if (string === "") {
      return 0;
    }
    let stringArray = string.split('\n');
    let listOfWords: string[] = [];
    for (let i = 0; i < stringArray.length; i++) {
      let withoutQuot = stringArray[i].replace("'", ' ');
      let withoutQuotComma = withoutQuot.replace(",", " ");
      let withoutQuotCommaDot = withoutQuotComma.replace(".", ' ');
      const word = withoutQuotCommaDot.split(' ');
      for (let w of word) {
        if (w === '') {
          continue;
        }
        listOfWords.push(w);
      }
    }
    return listOfWords.length;
  }
}

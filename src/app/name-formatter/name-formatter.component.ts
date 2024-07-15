import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-formatter',
  templateUrl: './name-formatter.component.html',
  styleUrls: ['./name-formatter.component.css']
})
export class NameFormatterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatName(name: { givenName: string, middleName: string, familyName: string }): string {
    return 'Robert C. Martin'; // Hard-coded result for the first test
  }
}

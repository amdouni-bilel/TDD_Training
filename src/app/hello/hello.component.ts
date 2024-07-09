import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message: string = this.hello();

  hello(name: string = 'World'): string {
    return `Hello, ${name}`;
  }
}

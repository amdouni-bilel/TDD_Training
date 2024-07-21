import { Component } from '@angular/core';
import {PasswordValidatorService} from "./password-validator.service";

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class PasswordValidatorComponent {
  password: string = '';
  isValid: boolean | null = null;

  constructor(private passwordValidatorService: PasswordValidatorService) {}

  checkPassword() {
    this.isValid = this.passwordValidatorService.isValidPassword(this.password);
  }
}

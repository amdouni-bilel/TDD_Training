import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  isValidPassword(password: string): boolean {
    if (!password) return false;
    if (password.length < 8) return false;
    if (!/\d/.test(password)) return false;
    return true;
  }
}

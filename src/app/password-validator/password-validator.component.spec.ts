/*
// src/app/services/password-validator.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { PasswordValidatorService } from './password-validator.service';

describe('PasswordValidatorService', () => {
  let service: PasswordValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reject password when it is empty', () => {
    expect(service.isValidPassword('')).toBe(false);
  });

  it('should reject password when it is too short', () => {
    expect(service.isValidPassword('short')).toBe(false);
  });

  it('should reject password when it contains no digits', () => {
    expect(service.isValidPassword('NoDigitsHere')).toBe(false);
  });

  it('should accept valid password', () => {
    expect(service.isValidPassword('validPassword123')).toBe(true);
  });
});
*/

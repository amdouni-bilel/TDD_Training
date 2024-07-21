/*
// leap-year.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LeapYearComponent } from './leap-year.component';

describe('LeapYearComponent', () => {
  let component: LeapYearComponent;
  let fixture: ComponentFixture<LeapYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeapYearComponent ],
      imports: [ FormsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true for a leap year divisible by 400', () => {
    component.yearToCheck = 2000;
    component.checkLeapYear();
    expect(component.isLeap).toBeTrue();
  });

  it('should return false for a year divisible by 100 but not 400', () => {
    component.yearToCheck = 1900;
    component.checkLeapYear();
    expect(component.isLeap).toBeFalse();
  });

  it('should return true for a year divisible by 4 but not 100', () => {
    component.yearToCheck = 2020;
    component.checkLeapYear();
    expect(component.isLeap).toBeTrue();
  });

  it('should return false for a year not divisible by 4', () => {
    component.yearToCheck = 2019;
    component.checkLeapYear();
    expect(component.isLeap).toBeFalse();
  });
});
*/

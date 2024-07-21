import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AverageComponent } from './average.component';

describe('AverageComponent', () => {
  let component: AverageComponent;
  let fixture: ComponentFixture<AverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageComponent ],
      imports: [ FormsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate average for empty input', () => {
    component.numbersInput = '';
    component.calculateAverage();
    expect(component.average).toBe(0);
  });

  it('should calculate average for single number', () => {
    component.numbersInput = '5';
    component.calculateAverage();
    expect(component.average).toBe(5);
  });

  it('should calculate average for multiple numbers', () => {
    component.numbersInput = '5, 30, 8, 15, 2, 18';
    component.calculateAverage();
    expect(component.average).toBe(13);
  });

  it('should handle decimal numbers', () => {
    component.numbersInput = '1.5, 2.5, 3.5';
    component.calculateAverage();
    expect(component.average).toBe(2.5);
  });

  it('should handle negative numbers', () => {
    component.numbersInput = '-1, -2, -3';
    component.calculateAverage();
    expect(component.average).toBe(-2);
  });

  it('should handle both positive and negative numbers', () => {
    component.numbersInput = '-10, 10, -20, 20';
    component.calculateAverage();
    expect(component.average).toBe(0);
  });
});

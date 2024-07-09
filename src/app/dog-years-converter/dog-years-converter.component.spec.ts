import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogYearsConverterComponent } from './dog-years-converter.component';

describe('DogYearsConverterComponent', () => {
  let component: DogYearsConverterComponent;
  let fixture: ComponentFixture<DogYearsConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogYearsConverterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogYearsConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should convert 3 dog years to 21 human years', () => {
    const humanYears = component.convertToHumanYears(3);
    expect(humanYears).toBe(21);
  });
});

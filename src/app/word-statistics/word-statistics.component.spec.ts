import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordStatisticsComponent } from './word-statistics.component';

describe('WordStatisticsComponent', () => {
  let component: WordStatisticsComponent;
  let fixture: ComponentFixture<WordStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStatisticsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return 1 for a single word "a"', () => {
    const sentence = 'a';
    const result = component.getAverageWordLength(sentence);
    expect(result).toBe(1);
  });
});

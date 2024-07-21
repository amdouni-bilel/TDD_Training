import { TestBed } from '@angular/core/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should calculate the sum of numbers correctly', () => {
    // Test de la somme avec `toBe`
    const result = service.sum([1, 2, 3, 4, 5]);
    expect(result).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  it('should calculate the average of numbers correctly', () => {
    // Test de la moyenne avec `toBeCloseTo`
    const result = service.average([1, 2, 3, 4, 5]);
    expect(result).toBeCloseTo(3, 0); // La moyenne est 3, avec 0 décimale de précision
  });

  it('should return 0 for average when no numbers are provided', () => {
    // Test de la moyenne avec tableau vide
    const result = service.average([]);
    expect(result).toBe(0); // La moyenne de zéro éléments est 0
  });

  it('should handle floating point precision correctly', () => {
    // Test de la somme avec `toBeCloseTo` pour des nombres flottants
    const result = service.sum([0.1, 0.2, 0.3, 0.4, 0.5]);
    expect(result).toBeCloseTo(1.5, 1); // La somme est 1.5, avec 1 décimale de précision
  });
});

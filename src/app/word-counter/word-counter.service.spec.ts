import { TestBed } from '@angular/core/testing';
import { WordCounterService } from './word-counter.service';

describe('WordCounterService', () => {
  let service: WordCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordCounterService);
  });

  it('should count the words in a given text', () => {
    expect(service.countWords("A user interface is like a joke.\nIf you have to explain it, it's not that good.")).toBe(18);
    expect(service.countWords('Test data is data which has been specifically identified for use in tests, typically of a computer program.\n' +
      'Due to privacy rules and regulations like GDPR, PCI and HIPAA it is not allowed to use privacy sensitive personal data for testing.')).toBe(41);
    expect(service.countWords('TDD is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.')).toBe(34);
    expect(service.countWords("What's the difference between a good joke and a bad joke timing.")).toBe(13);
  });
});

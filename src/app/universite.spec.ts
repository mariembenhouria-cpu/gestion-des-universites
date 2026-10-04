import { TestBed } from '@angular/core/testing';
import { Universite } from './universite';

describe('Universite', () => {
  let service: Universite;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Universite);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

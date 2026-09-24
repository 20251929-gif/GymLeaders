import { TestBed } from '@angular/core/testing';
import { Trainerservice } from './trainerservice';

describe('Trainerservice', () => {
  let service: Trainerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trainerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

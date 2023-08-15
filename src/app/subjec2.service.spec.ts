import { TestBed } from '@angular/core/testing';

import { Subjec2Service } from './subjec2.service';

describe('Subjec2Service', () => {
  let service: Subjec2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subjec2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

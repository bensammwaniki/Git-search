import { TestBed } from '@angular/core/testing';

import { DisplayProfService } from './display-prof.service';

describe('DisplayProfService', () => {
  let service: DisplayProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

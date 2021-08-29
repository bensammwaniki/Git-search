import { TestBed } from '@angular/core/testing';

import { DisplayServService } from './display-serv.service';

describe('DisplayServService', () => {
  let service: DisplayServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

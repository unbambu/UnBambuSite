import { TestBed } from '@angular/core/testing';

import { TranslateparserService } from './translateparser.service';

describe('TranslateparserService', () => {
  let service: TranslateparserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateparserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

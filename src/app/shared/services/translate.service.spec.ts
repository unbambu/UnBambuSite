import { TestBed } from '@angular/core/testing';

import { TranslateApp } from './translate.service';

describe('TransService', () => {
  let service: TranslateApp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateApp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

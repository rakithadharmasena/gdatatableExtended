import { TestBed } from '@angular/core/testing';

import { GdtLibService } from './gdt-lib.service';

describe('GdtLibService', () => {
  let service: GdtLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdtLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

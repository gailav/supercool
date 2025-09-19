import { TestBed } from '@angular/core/testing';

import { ButtonFunctionService } from './button-function-service';

describe('ButtonFunctionService', () => {
  let service: ButtonFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

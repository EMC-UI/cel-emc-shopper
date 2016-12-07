/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoneService } from './done.service';

describe('Service: Done', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoneService]
    });
  });

  it('should ...', inject([DoneService], (service: DoneService) => {
    expect(service).toBeTruthy();
  }));
});

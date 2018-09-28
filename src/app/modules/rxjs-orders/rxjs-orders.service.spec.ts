import { TestBed, inject } from '@angular/core/testing';

import { RxjsOrdersService } from './rxjs-orders.service';

describe('RxjsOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsOrdersService]
    });
  });

  it('should be created', inject([RxjsOrdersService], (service: RxjsOrdersService) => {
    expect(service).toBeTruthy();
  }));
});

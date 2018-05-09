import { TestBed, inject } from '@angular/core/testing';

import { BugsService } from './bugs.service';

describe('BugsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugsService]
    });
  });

  it('should be created', inject([BugsService], (service: BugsService) => {
    expect(service).toBeTruthy();
  }));
});

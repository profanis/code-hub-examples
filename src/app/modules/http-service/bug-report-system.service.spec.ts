import { TestBed, inject } from '@angular/core/testing';

import { BugReportSystemService } from './bug-report-system.service';

describe('BugReportSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugReportSystemService]
    });
  });

  it('should be created', inject([BugReportSystemService], (service: BugReportSystemService) => {
    expect(service).toBeTruthy();
  }));
});

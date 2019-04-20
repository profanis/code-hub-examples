import { UnitTestingModule } from './unit-testing.module';

describe('UnitTestingModule', () => {
  let unitTestingModule: UnitTestingModule;

  beforeEach(() => {
    unitTestingModule = new UnitTestingModule();
  });

  it('should create an instance', () => {
    expect(unitTestingModule).toBeTruthy();
  });
});

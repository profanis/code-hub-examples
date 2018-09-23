import { AdvancedDiExampleModule } from './advanced-di-example.module';

describe('AdvancedDiExampleModule', () => {
  let advancedDiExampleModule: AdvancedDiExampleModule;

  beforeEach(() => {
    advancedDiExampleModule = new AdvancedDiExampleModule();
  });

  it('should create an instance', () => {
    expect(advancedDiExampleModule).toBeTruthy();
  });
});

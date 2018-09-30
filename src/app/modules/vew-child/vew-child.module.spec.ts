import { VewChildModule } from './vew-child.module';

describe('VewChildModule', () => {
  let vewChildModule: VewChildModule;

  beforeEach(() => {
    vewChildModule = new VewChildModule();
  });

  it('should create an instance', () => {
    expect(vewChildModule).toBeTruthy();
  });
});

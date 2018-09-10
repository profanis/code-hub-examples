import { CssEncapsulationModule } from './css-encapsulation.module';

describe('CssEncapsulationModule', () => {
  let cssEncapsulationModule: CssEncapsulationModule;

  beforeEach(() => {
    cssEncapsulationModule = new CssEncapsulationModule();
  });

  it('should create an instance', () => {
    expect(cssEncapsulationModule).toBeTruthy();
  });
});

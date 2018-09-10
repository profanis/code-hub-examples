import { LazyLoadGuardsModule } from './lazy-load-guards.module';

describe('LazyLoadGuardsModule', () => {
  let lazyLoadGuardsModule: LazyLoadGuardsModule;

  beforeEach(() => {
    lazyLoadGuardsModule = new LazyLoadGuardsModule();
  });

  it('should create an instance', () => {
    expect(lazyLoadGuardsModule).toBeTruthy();
  });
});

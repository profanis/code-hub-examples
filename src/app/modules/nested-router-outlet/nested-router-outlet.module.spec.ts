import { NestedRouterOutletModule } from './nested-router-outlet.module';

describe('NestedRouterOutletModule', () => {
  let nestedRouterOutletModule: NestedRouterOutletModule;

  beforeEach(() => {
    nestedRouterOutletModule = new NestedRouterOutletModule();
  });

  it('should create an instance', () => {
    expect(nestedRouterOutletModule).toBeTruthy();
  });
});

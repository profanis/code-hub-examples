import { ResolversModule } from './resolvers.module';

describe('ResolversModule', () => {
  let resolversModule: ResolversModule;

  beforeEach(() => {
    resolversModule = new ResolversModule();
  });

  it('should create an instance', () => {
    expect(resolversModule).toBeTruthy();
  });
});

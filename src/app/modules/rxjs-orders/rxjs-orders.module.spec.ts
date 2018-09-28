import { RxjsOrdersModule } from './rxjs-orders.module';

describe('RxjsOrdersModule', () => {
  let rxjsOrdersModule: RxjsOrdersModule;

  beforeEach(() => {
    rxjsOrdersModule = new RxjsOrdersModule();
  });

  it('should create an instance', () => {
    expect(rxjsOrdersModule).toBeTruthy();
  });
});
